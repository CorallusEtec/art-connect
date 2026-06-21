export type TipoConta = "ARTISTA" | "CONTRATANTE" | "ADMIN";
export const status = ["ATIVO", "SUSPENSO", "EXCLUIDO", "BANIDO"] as const;
export type TipoStatus = (typeof status)[number];
