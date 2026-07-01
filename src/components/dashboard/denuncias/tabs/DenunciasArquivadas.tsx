import { useListDenunciaArquivada } from "@/services/DenunciaService";
import { DenunciaCard } from "../DenunciaCard";
import { Box } from "@mui/material";

type DenunciasArquivadasTabProps = {
  index: number;
  value: number;
};

export function DenunciasArquivadasTab({
  index,
  value,
}: DenunciasArquivadasTabProps) {
  const { data, isLoading } = useListDenunciaArquivada();
  return (
    <Box component="div" hidden={index != value}>
      {data?.data.content.map((d, index) => (
        <DenunciaCard data={d} key={index} />
      ))}
    </Box>
  );
}
