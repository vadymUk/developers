"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Copy, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  createContactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { useLanguage } from "@/lib/i18n/language-context";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20";
const contactNumber = "+48 576 222 842";
const compactContactNumber = "+48576222842";
const channelIcons = [MessageCircle, MessageCircle, PhoneCall];
const channelHrefs = [
  `viber://chat?number=${encodeURIComponent(compactContactNumber)}`,
  `https://wa.me/${compactContactNumber.slice(1)}`,
  `tel:${compactContactNumber}`,
];

export function ContactSection() {
  const { t } = useLanguage();
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const contactSchema = useMemo(
    () => createContactSchema(t.contact.errors),
    [t],
  );
  const contactChannels = t.contact.channels.map((channel, index) => ({
    ...channel,
    href: channelHrefs[index],
    icon: channelIcons[index],
  }));
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      requestType: "site",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setSubmitError(result.message ?? t.contact.genericError);
        return;
      }

      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(t.contact.genericError);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
            className="mb-8"
          />

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {contactChannels.map(
              ({ name, description, href, icon: Icon, fallback }) => (
                <article
                  key={name}
                  className="group rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.72))] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/35 hover:shadow-[0_24px_60px_rgba(14,165,233,0.12)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <a
                      href={href}
                      target={name === "WhatsApp" ? "_blank" : undefined}
                      rel={
                        name === "WhatsApp" ? "noopener noreferrer" : undefined
                      }
                      className="flex min-w-0 flex-1 items-center gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-400/10 text-sky-200 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-lg font-semibold text-white">
                          {name}
                        </span>
                        <span className="block text-sm text-slate-400">
                          {description}
                        </span>
                      </span>
                    </a>
                    <CopyContactButton value={contactNumber} />
                  </div>
                  <a
                    href={href}
                    target={name === "WhatsApp" ? "_blank" : undefined}
                    rel={
                      name === "WhatsApp" ? "noopener noreferrer" : undefined
                    }
                    className="mt-5 block select-text text-lg font-medium tracking-wide text-sky-100 outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    {contactNumber}
                  </a>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {fallback}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.8))] p-6 shadow-[0_30px_80px_rgba(2,6,23,0.52)]">
          <h3 className="text-2xl font-semibold text-white">
            {t.contact.formTitle}
          </h3>
          <p className="mt-3 text-base text-slate-300">
            {t.contact.formDescription}
          </p>

          {submitted ? (
            <div
              className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100"
              role="status"
            >
              {t.contact.successMessage}
            </div>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("website")}
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  {t.contact.fields.name}{" "}
                  <span className="text-sky-300">*</span>
                </label>
                <input
                  id="name"
                  autoComplete="name"
                  className={inputClasses}
                  placeholder={t.contact.fields.namePlaceholder}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  {...register("name")}
                />
                {errors.name ? (
                  <p id="name-error" className="mt-2 text-sm text-rose-300">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  {t.contact.fields.phone}{" "}
                  <span className="text-sky-300">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputClasses}
                  placeholder={t.contact.fields.phonePlaceholder}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  {...register("phone")}
                />
                {errors.phone ? (
                  <p id="phone-error" className="mt-2 text-sm text-rose-300">
                    {errors.phone.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="requestType"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  {t.contact.fields.requestType}{" "}
                  <span className="text-sky-300">*</span>
                </label>
                <select
                  id="requestType"
                  className={inputClasses}
                  aria-invalid={Boolean(errors.requestType)}
                  aria-describedby={
                    errors.requestType ? "request-type-error" : undefined
                  }
                  {...register("requestType")}
                >
                  <option value="site">
                    {t.contact.fields.requestTypeSite}
                  </option>
                  <option value="consultation">
                    {t.contact.fields.requestTypeConsultation}
                  </option>
                </select>
                {errors.requestType ? (
                  <p
                    id="request-type-error"
                    className="mt-2 text-sm text-rose-300"
                  >
                    {errors.requestType.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  {t.contact.fields.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`${inputClasses} resize-y`}
                  placeholder={t.contact.fields.messagePlaceholder}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  {...register("message")}
                />
                {errors.message ? (
                  <p id="message-error" className="mt-2 text-sm text-rose-300">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>

              {submitError ? (
                <p
                  className="rounded-xl border border-rose-400/25 bg-rose-400/10 p-3 text-sm text-rose-200"
                  role="alert"
                >
                  {submitError}
                </p>
              ) : null}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? t.contact.submitting : t.contact.submit}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function CopyContactButton({ value }: { value: string }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  const label = copied ? t.contact.copiedLabel : t.contact.copyLabel;

  return (
    <button
      type="button"
      onClick={copyNumber}
      aria-label={label}
      title={label}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 outline-none transition-colors hover:border-sky-400/40 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300"
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-300" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
}
