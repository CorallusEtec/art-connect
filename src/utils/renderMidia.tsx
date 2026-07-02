import { TipoMidia } from "@/models/enumeration/enums";

type RenderTipoMidiaProps = {
  tipoMidia?: TipoMidia;
  urlTipoMidia?: string;
};

export function renderMidia({ tipoMidia, urlTipoMidia }: RenderTipoMidiaProps) {
  switch (tipoMidia) {
    case "VIDEO":
      break;
    case "IMAGEM":
      return (
        <img
          className="aspect-square w-[50%] bg-cover"
          src={urlTipoMidia}
          alt="Imagem da publicacao"
        />
      );
    case "AUDIO":
      break;
    default:
      break;
  }
}
