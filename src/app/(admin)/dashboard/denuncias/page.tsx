"use client";
import { CardDetails } from "@/components/CardDetails";
import { DenunciasArquivadasTab } from "@/components/dashboard/denuncias/tabs/DenunciasArquivadas";
import { DenunciasPendentesTab } from "@/components/dashboard/denuncias/tabs/DenunciasPendentes";
import { useListDenunciaPendente } from "@/services/DenunciaService";
import { Container, Skeleton, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { FaFlag, FaRegFlag } from "react-icons/fa";

export default function DenunciasAdmin() {
  const [tab, setTab] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const { data, isLoading } = useListDenunciaPendente();

  return (
    <main className="pt-5 px-15">
      <Typography variant="h4">Denúncias</Typography>
      <Typography color="textSecondary" variant="subtitle1">
        Denúncias enviadas pelos usuarios
      </Typography>

      <Container maxWidth="xs">
        {isLoading ? (
          <>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          <CardDetails
            sx={{ backgroundColor: "whitesmoke" }}
            label={
              <span className="text-xs text-vermelho-300">
                Denúncias pendentes
              </span>
            }
            acessory={<></>}
            insight={data?.data.content.length ?? 0}
          >
            <FaRegFlag />
          </CardDetails>
        )}
      </Container>

      <Container component="div" className="flex flex-col gap-5">
        <Tabs value={tab} onChange={handleChange}>
          <Tab label={<Typography>Denúncias pendentes</Typography>} />
          <Tab label={<Typography>Denúncias arquivadas</Typography>} />
        </Tabs>
        <DenunciasPendentesTab value={tab} index={0} />
        <DenunciasArquivadasTab value={tab} index={1} />
      </Container>
    </main>
  );
}
