import { useAlterComentario } from "@/services/AdminService";
import { useGetComentario } from "@/services/ComentarioService";
import { capitalize, converterData, labelData } from "@/utils/utils";
import {
  Avatar,
  Box,
  ButtonBase,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiDotsVertical } from "react-icons/bi";

type ComentarioProps = {
  idComentario: number;
};

export function Comentario({ idComentario }: ComentarioProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const { data, isLoading } = useGetComentario(idComentario);
  const { mutate } = useAlterComentario();
  const router = useRouter();

  if (isLoading) return <></>;

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid size={11}>
            <ButtonBase
              onClick={() =>
                router.push(
                  `/dashboard/usuarios?page=0&nome=${data?.data.usuario.nome}`,
                )
              }
              component={Grid}
              className="justify-start flex gap-2 items-center"
            >
              <Avatar
                src={data?.data.usuario.fotoPerfilUrl}
                sx={{ backgroundColor: "#0067EA" }}
              >
                {data?.data.usuario.nome.charAt(0) || "U"}
              </Avatar>
              <Box component="div" className="flex flex-col justify-center">
                <Box component="div" className="flex items-center gap-5">
                  <Typography variant="subtitle1">
                    {data?.data.usuario.nome}
                  </Typography>
                  <Chip
                    size="small"
                    variant="outlined"
                    color="primary"
                    label={`Status do comentário: ${capitalize(data?.data.status.tipoStatus || "")}`}
                  />
                </Box>
                <Typography variant="caption">
                  {labelData(
                    converterData(new Date(data!.data.dataComentario)),
                  )}
                </Typography>
              </Box>
            </ButtonBase>
          </Grid>
          <Grid component="div" className="flex justify-end" size={1}>
            <IconButton onClick={handleClick}>
              <BiDotsVertical />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <span>{data?.data.mensagem}</span>
      </CardContent>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {data?.data.status.tipoStatus == "ATIVO" ? (
          <MenuItem
            sx={{ color: theme.palette.error.main }}
            onClick={() => {
              mutate({
                idComentario: idComentario,
                tipoStatus:
                  data.data.status.tipoStatus == "ATIVO" ? "EXCLUIDO" : "ATIVO",
              });
              handleClose();
            }}
          >
            Excluir Comentário
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              mutate({
                idComentario: idComentario,
                tipoStatus:
                  data?.data.status.tipoStatus == "ATIVO"
                    ? "EXCLUIDO"
                    : "ATIVO",
              });
              handleClose();
            }}
          >
            Reativar Comentário
          </MenuItem>
        )}
        <MenuItem onClick={() => {}}>Teste</MenuItem>
      </Menu>
    </Card>
  );
}
