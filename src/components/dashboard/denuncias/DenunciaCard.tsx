import { DenunciaResponse } from "@/models/response/DenunciaResponse";
import {
  Card,
  Avatar,
  Box,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Chip,
} from "@mui/material";
import { FaFlag } from "react-icons/fa";
import { MdArchive, MdKeyboardArrowDown } from "react-icons/md";
import { renderContentDenuncia } from "@/utils/renderContentDenuncia";
import { capitalize, converterData, labelData } from "@/utils/utils";
import { useMutateStatusDenuncia } from "@/services/DenunciaService";

type DenunciaCardProps = {
  data: DenunciaResponse;
};

export function DenunciaCard({ data }: DenunciaCardProps) {
  const { mutate, isPending } = useMutateStatusDenuncia();

  return (
    <Accordion>
      <AccordionSummary expandIcon={<MdKeyboardArrowDown />}>
        <Box>
          <Box component="div" className="flex gap-5 items-center">
            <Chip label={capitalize(data.status.tipoStatus)} />
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
            </Box>

            <Chip
              variant="outlined"
              color="info"
              label={capitalize(data.tipoDenuncia)}
            />
          </Box>
          <Typography className="pl-5" variant="caption" color="textSecondary">
            Enviado há {labelData(converterData(new Date(data.dataEnvio)))}
          </Typography>
          <Typography variant="body2">
            Motivo da denúncia: {data.titulo}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Button
          loading={isPending}
          variant="outlined"
          disabled={isPending}
          onClick={() =>
            mutate({
              idDenuncia: data.id,
              tipoStatus:
                data.status.tipoStatus === "ARQUIVADO"
                  ? "PENDENTE"
                  : "ARQUIVADO",
            })
          }
          startIcon={<MdArchive />}
        >
          {data.status.tipoStatus == "PENDENTE"
            ? "Arquivar denúncia"
            : "Desarquivar denúncia"}
        </Button>

        {renderContentDenuncia({
          idRecurso: data.idRecurso,
          tipoDenuncia: data.tipoDenuncia,
        })}
      </AccordionDetails>
    </Accordion>
  );
}
