import { useListDenunciaPendente } from "@/services/DenunciaService";
import { DenunciaCard } from "../DenunciaCard";
import { Box } from "@mui/material";

type DenunciasPendentesTabProps = {
  index: number;
  value: number;
};

export function DenunciasPendentesTab({
  index,
  value,
}: DenunciasPendentesTabProps) {
  const { data, isLoading } = useListDenunciaPendente();
  console.log(index);
  return (
    <Box component="div" hidden={index != value}>
      {data?.data.content.map((d, index) => (
        <DenunciaCard data={d} key={index} />
      ))}
    </Box>
  );
}
