import z from "zod";

export const addArteSchema = z.object({
  nomeArte: z
    .string({ error: "Campo não preenchido" })
    .min(2, { error: "O nome da arte deve ter no mínimo 2 caracteres" }),
});
