import { status, usuarioStatus } from "@/models/enumeration/enums";
import z from "zod";

export const usuarioEditSchema = z.object({
  status: z.literal(status),
  descricao: z.optional(z.string()),
});
