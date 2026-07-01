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
export const tipoMidia = ["VIDEO", "IMAGEM", "AUDIO"] as const;
export type TipoMidia = (typeof tipoMidia)[number];

export type TipoStatus = (typeof status)[number];
export type TipoDenuncia = "USUARIO" | "COMENTARIO" | "PUBLICACAO";
