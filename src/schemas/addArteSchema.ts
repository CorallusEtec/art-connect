import z from "zod";

export const addArteSchema = z.object({
  nomeArte: z.string({ error: "Campo não preenchido" }),
});
