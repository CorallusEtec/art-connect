import z from "zod";

export const usuarioEditSchema = z.object({
  nome: z.string({ error: "Campo não preenchido" }).min(3),
  email: z.email({ error: "O email não é valido" }),
  status: z.literal(["ATIVO", "BANIDO", "SUSPENSO"]),
  descricao: z.string({ error: "Campo não preenchido" }),
});
