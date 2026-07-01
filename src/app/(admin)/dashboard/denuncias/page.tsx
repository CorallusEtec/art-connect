"use client";
import { CardDetails } from "@/components/CardDetails";
import { DenunciasArquivadasTab } from "@/components/dashboard/denuncias/tabs/DenunciasArquivadas";
import { DenunciasPendentesTab } from "@/components/dashboard/denuncias/tabs/DenunciasPendentes";
import { Container, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { FaFlag } from "react-icons/fa";

export default function DenunciasAdmin() {
  const [tab, setTab] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <main className="p-4">
      <Typography variant="h4">Denúncias</Typography>
      <Typography variant="subtitle1">
        Denúncias enviadas pelos usuarios
      </Typography>

      <Container maxWidth="sm">
        <CardDetails
          sx={{ backgroundColor: "whitesmoke" }}
          label={
            <span className="text-xs text-vermelho-300">
              Denúncias pendentes
            </span>
          }
          acessory={<></>}
          insight={5}
        >
          <FaFlag color="red" />
        </CardDetails>
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
