import { usePublicacaoContext } from "@/contexts/PublicacaoContext";
import { useAlterPublicacao } from "@/services/AdminService";
import { useGetPublicacao } from "@/services/PublicacaoService";
import { capitalize, converterData, labelData } from "@/utils/utils";
import {
  Avatar,
  Box,
  ButtonBase,
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

export function PublicacaoHeader() {
  const { idPublicacao } = usePublicacaoContext();
  const { data, isLoading } = useGetPublicacao(idPublicacao.current);

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const { mutate } = useAlterPublicacao();
  return (
    <CardContent>
      <Grid container>
        <Grid size={11}>
          <ButtonBase
            onClick={() =>
              router.push(
                `/dashboard/usuarios?page=0&nome=${data?.data.publicacao.autor.nome}`,
              )
            }
            component={Grid}
            className="justify-start flex gap-2 items-center"
          >
            <Avatar
              src={data?.data.publicacao.autor.fotoPerfilUrl}
              sx={{ backgroundColor: "#0067EA" }}
            >
              {data?.data.publicacao.autor.nome.charAt(0) || "U"}
            </Avatar>
            <Box component="div" className="flex flex-col justify-center">
              <Box component="div" className="flex items-center gap-5">
                <Typography variant="subtitle1">
                  {data?.data.publicacao.autor.nome}
                </Typography>
              </Box>
              <Box component="div" className="flex gap-3 items-center">
                <Typography variant="caption">
                  {labelData(
                    converterData(
                      new Date(data!.data.publicacao.dataPublicacao),
                    ),
                  )}
                </Typography>
                <Chip
                  size="small"
                  variant="outlined"
                  color="primary"
                  label={`Status da publicação:
                  ${capitalize(
                    data?.data.publicacao.statusPublicacao.tipoStatus || "",
                  )}`}
                />
              </Box>
            </Box>
          </ButtonBase>
        </Grid>
        <Grid component="div" className="flex justify-end" size={1}>
          <IconButton onClick={handleClick}>
            <BiDotsVertical />
          </IconButton>
        </Grid>
      </Grid>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {data?.data.publicacao.statusPublicacao.tipoStatus == "ATIVO" ? (
          <MenuItem
            sx={{ color: theme.palette.error.main }}
            onClick={() => {
              mutate({
                idPublicacao: idPublicacao.current,
                tipoStatus:
                  data.data.publicacao.statusPublicacao.tipoStatus == "ATIVO"
                    ? "EXCLUIDO"
                    : "ATIVO",
              });
              handleClose();
            }}
          >
            Excluir Publicacao
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              mutate({
                idPublicacao: idPublicacao.current,
                tipoStatus:
                  data?.data.publicacao.statusPublicacao.tipoStatus == "ATIVO"
                    ? "EXCLUIDO"
                    : "ATIVO",
              });
              handleClose();
            }}
          >
            Reativar publicação
          </MenuItem>
        )}
      </Menu>
    </CardContent>
  );
}
