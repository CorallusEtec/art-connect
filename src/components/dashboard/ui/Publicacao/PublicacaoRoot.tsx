import { usePublicacaoContext } from "@/contexts/PublicacaoContext";
import { useGetPublicacao } from "@/services/PublicacaoService";
import { renderMidia } from "@/utils/renderMidia";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import { MdOutlineChat, MdThumbDown, MdThumbUp } from "react-icons/md";
import { PublicacaoHeader } from "./PublicacaoHeader";
import { PublicacaoActions } from "./PublicacaoActions";

export function Publicacao() {
  const { idPublicacao } = usePublicacaoContext();

  const { data, isLoading } = useGetPublicacao(idPublicacao.current);

  if (isLoading) return <CircularProgress />;
  return (
    <Card elevation={0}>
      <PublicacaoHeader />
      <Typography>{data?.data.publicacao.legenda}</Typography>
      <CardContent>
        <div className="flex justify-center">
          {renderMidia({
            tipoMidia: data?.data.publicacao.tipoMidia,
            urlTipoMidia: data?.data.publicacao.urlMidia,
          })}
        </div>
      </CardContent>
      <PublicacaoActions />
    </Card>
  );
}
