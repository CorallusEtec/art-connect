export type TipoConta = "ARTISTA" | "CONTRATANTE" | "ADMIN";
export const status = [
  "ATIVO",
  "SUSPENSO",
  "EXCLUIDO",
  "BANIDO",
  "PENDENTE",
  "CONCLUIDO",
  "ARQUIVADO",
] as const;
export type TipoStatus = (typeof status)[number];
export type TipoDenuncia = "USUARIO" | "COMENTARIO" | "PUBLICACAO";
