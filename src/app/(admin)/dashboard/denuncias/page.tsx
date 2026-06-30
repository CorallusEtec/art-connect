"use client";
import { CardDetails } from "@/components/CardDetails";
import { DenunciaCard } from "@/components/dashboard/denuncias/DenunciaCard";
import { useListDenuncia } from "@/services/DenunciaService";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { FaFlag } from "react-icons/fa";

export default function DenunciasAdmin() {
  const { data, isLoading } = useListDenuncia();
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
        {data?.data.content.map((d, index) => (
          <DenunciaCard data={d} key={index} />
        ))}
      </Container>
    </main>
  );
}
