import { usePublicacaoContext } from "@/contexts/PublicacaoContext";
import { useGetPublicacao } from "@/services/PublicacaoService";
import { Box, CardActions, IconButton } from "@mui/material";
import { MdOutlineChat, MdThumbDown, MdThumbUp } from "react-icons/md";

export function PublicacaoActions() {
  const { idPublicacao } = usePublicacaoContext();

  const { data, isLoading } = useGetPublicacao(idPublicacao.current);
  return (
    <CardActions>
      <Box>
        <IconButton>
          <MdThumbUp />
        </IconButton>
        <span>{data?.data.likes}</span>
      </Box>
      <Box>
        <IconButton>
          <MdThumbDown />
        </IconButton>
        <span>{data?.data.dislikes}</span>
      </Box>
      <Box>
        <IconButton>
          <MdOutlineChat />
        </IconButton>
        <span>{data?.data.totalComentarios}</span>
      </Box>
    </CardActions>
  );
}
