import { Comentario } from "@/components/dashboard/ui/Comentario/Comentario";
import { Publicacao } from "@/components/dashboard/ui/Publicacao/PublicacaoRoot";
import { PublicacaoProvider } from "@/contexts/PublicacaoContext";
import { TipoDenuncia } from "@/models/enumeration/enums";

type ContentDenunciaProps = {
  tipoDenuncia: TipoDenuncia;
  idRecurso: number;
};

export function renderContentDenuncia({
  tipoDenuncia,
  idRecurso,
}: ContentDenunciaProps) {
  switch (tipoDenuncia) {
    case "USUARIO":
      return <></>;
    case "COMENTARIO":
      return <Comentario idComentario={idRecurso} />;
    case "PUBLICACAO":
      return (
        <PublicacaoProvider key={idRecurso} idPublicacao={idRecurso}>
          <Publicacao />
        </PublicacaoProvider>
      );
  }
}
