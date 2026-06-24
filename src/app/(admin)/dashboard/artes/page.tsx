"use client";
import { ArteList } from "@/components/dashboard/artes/ArteList";
import { Box, Container, Fab, Stack, Typography } from "@mui/material";
import { MdAdd } from "react-icons/md";
import { CreateArte } from "@/components/dashboard/artes/CreateArte";
import { useState } from "react";
import { ArteEditProvider } from "@/contexts/ArteEditContext";
import { GeneroArteEditProvider } from "@/contexts/GeneroEditContext";

export default function AdminArtes() {
  const [createDialog, setCreateDialog] = useState(false);
  return (
    <>
      <CreateArte open={createDialog} setOpen={setCreateDialog} />
      <Box component={"div"} className="p-5">
        <Container className="flex gap-5 flex-row items-center">
          <Typography color="textPrimary" variant="h4">
            Artes cadastradas
          </Typography>
          <Fab
            onClick={() => setCreateDialog(true)}
            size="medium"
            variant="extended"
            className="flex items-center gap-3"
            color="primary"
          >
            Adicionar arte
            <MdAdd size={22} />
          </Fab>
        </Container>
        <Container>
          <Typography
            color="textSecondary"
            className="pl-2 pt-3"
            variant="body1"
          >
            Listagem das artes e gêneros cadastrados
          </Typography>
        </Container>
        <ArteEditProvider>
          <GeneroArteEditProvider>
            <ArteList />
          </GeneroArteEditProvider>
        </ArteEditProvider>
      </Box>
    </>
  );
}
