"use client";
import { ArteList } from "@/components/dashboard/artes/ArteList";
import { Box, Container, Fab, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { MdAdd } from "react-icons/md";
import { CreateArte } from "@/components/dashboard/artes/CreateArte";
import { useState } from "react";

export default function AdminArtes() {
  const [createDialog, setCreateDialog] = useState(false);
  return (
    <>
      <CreateArte open={createDialog} setOpen={setCreateDialog} />
      <Box component={"div"} className="p-5">
        <Container className="flex gap-5 flex-row items-center">
          <Typography variant="h4">Artes</Typography>
          <Fab
            onClick={() => setCreateDialog(true)}
            size="small"
            variant="extended"
            color="primary"
          >
            Adicionar arte
            <MdAdd size={20} />
          </Fab>
        </Container>
        <ArteList />
      </Box>
    </>
  );
}
