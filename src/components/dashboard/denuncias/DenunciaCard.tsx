import { DenunciaResponse } from "@/models/response/DenunciaResponse";
import {
  Card,
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FaFlag } from "react-icons/fa";

type DenunciaCardProps = {
  data: DenunciaResponse;
};

export function DenunciaCard({ data }: DenunciaCardProps) {
  return (
    <Card elevation={2}>
      <CardContent>
        <Box component="div" className="flex gap-5 items-center">
          <FaFlag />

          <Box component="div" className="flex items-center gap-2">
            <Avatar
              sx={{ backgroundColor: "#0067EA" }}
              src={data.autor?.fotoPerfilUrl}
              alt={"Foto de perfil de " + data.autor.nome}
            >
              {data.autor.nome.charAt(0)}
            </Avatar>
            <Typography>{data.autor.nome}</Typography>
            <Typography>
              {new Date(data.dataEnvio).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
        <Typography>{data.titulo}</Typography>
      </CardContent>
      <CardActions>
        <Button>Visualizar publicação</Button>
        <Button>Arquivar denúncia</Button>
      </CardActions>
    </Card>
  );
}
