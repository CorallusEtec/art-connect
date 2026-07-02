import { useListDenunciaPendente } from "@/services/DenunciaService";
import { DenunciaCard } from "../DenunciaCard";
import { Box, Typography } from "@mui/material";

type DenunciasPendentesTabProps = {
  index: number;
  value: number;
};

export function DenunciasPendentesTab({
  index,
  value,
}: DenunciasPendentesTabProps) {
  const { data, isLoading } = useListDenunciaPendente();
  return (
    <Box component="div" hidden={index != value}>
      {data?.data && data.data.content.length > 0 ? (
        data?.data.content.map((d, index) => (
          <DenunciaCard data={d} key={index} />
        ))
      ) : (
        <Typography align="center" variant="subtitle1" color="textDisabled">
          Nenhuma denúncia pendente
        </Typography>
      )}
    </Box>
  );
}
