import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 16 * 1024;
const requestsByIp = new Map<string, number[]>();

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recentRequests = (requestsByIp.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW,
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestsByIp.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestsByIp.set(ip, recentRequests);
  return false;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

export async function POST(request: Request) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { message: "Не вдалося відправити заявку. Спробуйте пізніше." },
      { status: 429 },
    );
  }

  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().startsWith("application/json")) {
      return NextResponse.json(
        { message: "Перевірте введені дані та спробуйте ще раз." },
        { status: 400 },
      );
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return NextResponse.json(
        {
          message:
            "Повідомлення занадто велике. Скоротіть текст і спробуйте ще раз.",
        },
        { status: 413 },
      );
    }

    const body: unknown = JSON.parse(rawBody);
    const result = contactSchema.safeParse(body);

    if (!result.success || result.data.website) {
      return NextResponse.json(
        { message: "Перевірте введені дані та спробуйте ще раз." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      return NextResponse.json(
        { message: "Не вдалося відправити заявку. Спробуйте пізніше." },
        { status: 500 },
      );
    }

    const { name, phone, requestType, message } = result.data;
    const requestTypeLabel =
      requestType === "site"
        ? "Хочу замовити сайт"
        : "Хочу отримати консультацію";
    const submittedAt = new Intl.DateTimeFormat("uk-UA", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "Europe/Kyiv",
    }).format(new Date());
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Замовлення сайту <onboarding@resend.dev>",
      to: contactEmail,
      subject: `Нова заявка від ${name}`,
      html: `
        <h2>Нова заявка з контактної форми</h2>
        <p><strong>Ім'я:</strong> ${escapeHtml(name)}</p>
        <p><strong>Телефон:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Тип звернення:</strong> ${escapeHtml(requestTypeLabel)}</p>
        <p><strong>Питання або побажання:</strong><br />${escapeHtml(message || "Не вказано")}</p>
        <p><strong>Дата та час:</strong> ${escapeHtml(submittedAt)}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { message: "Не вдалося відправити заявку. Спробуйте пізніше." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message:
        "Дякую! Ваше повідомлення успішно відправлено. Я зв'яжуся з вами найближчим часом.",
    });
  } catch {
    return NextResponse.json(
      { message: "Перевірте введені дані та спробуйте ще раз." },
      { status: 400 },
    );
  }
}
