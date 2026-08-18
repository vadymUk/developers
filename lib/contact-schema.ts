import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Введіть ім'я довжиною щонайменше 2 символи.")
    .max(80, "Ім'я не може бути довшим за 80 символів.")
    .regex(
      /^[\p{L}][\p{L}\s'’.-]*$/u,
      "Ім'я може містити лише літери, пробіли та дефіси.",
    ),
  phone: z
    .string()
    .trim()
    .min(7, "Введіть номер телефону.")
    .max(25, "Номер телефону занадто довгий.")
    .regex(/^\+?[\d\s()\-]+$/, "Введіть коректний номер телефону.")
    .refine(
      (value) => value.replace(/\D/g, "").length >= 7,
      "Номер телефону має містити щонайменше 7 цифр.",
    )
    .refine(
      (value) => value.replace(/\D/g, "").length <= 15,
      "Номер телефону не може містити більше 15 цифр.",
    ),
  requestType: z.enum(["site", "consultation"], {
    error: "Оберіть тип звернення.",
  }),
  message: z
    .string()
    .trim()
    .max(2000, "Питання не може бути довшим за 2000 символів."),
  website: z.string().max(0, "Некоректне поле.").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
