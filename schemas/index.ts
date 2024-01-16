import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Senha deve ter no mínimo 6 caracteres",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "E-mail é obrigatório",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "E-mail é obrigatório",
  }),
  password: z.string().min(1, {
    message: "Senha é obrigatória",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "E-mail é obrigatório",
  }),
  password: z.string().min(6, {
    message: "Senha deve ter no mínimo 6 caracteres",
  }),
  name: z.string().min(1, {
    message: "Nome é obrigatório",
  }),
});
