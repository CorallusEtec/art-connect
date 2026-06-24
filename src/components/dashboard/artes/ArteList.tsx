"use client";
import { useRelatorio } from "@/services/AdminService";
import { useDeleteArte } from "@/services/ArteService";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Gauge } from "@mui/x-charts";
import { useRef, useState } from "react";
import {
  MdAdd,
  MdDelete,
  MdEdit,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { GenerosArteItem } from "./GenerosArteItem";
import { EditArte } from "./EditArte";
import { useArteEdit } from "@/contexts/ArteEditContext";
import { GeneroArteEdit } from "./GeneroArteEdit";
import { CreateGeneroArte } from "./CreateGeneroArte";

export function ArteList() {
  const { data: relatorioData, isLoading } = useRelatorio();
  const [deleteDialog, setDeleteDialog] = useState(false);
  const { mutate: deleteArte, isPending: pendingDeleteArte } = useDeleteArte();
  const { arteId, setOpen } = useArteEdit();
  const [createGenero, setCreateGenero] = useState(false);
  const ArteIdCreateGenero = useRef(0);
  const theme = useTheme();
  if (isLoading) return <CircularProgress />;
  return (
    <>
      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
        <DialogTitle variant="subtitle1">Deseja mesmo excluir?</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => setDeleteDialog(false)}
            variant="outlined"
            color="primary"
          >
            Cancelar
          </Button>
          <Button
            onClick={() => {
              deleteArte(arteId.current);
              setDeleteDialog(false);
            }}
            variant="contained"
            color="error"
            loading={pendingDeleteArte}
            disabled={pendingDeleteArte}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
      <EditArte />
      <GeneroArteEdit />
      <CreateGeneroArte
        arteId={ArteIdCreateGenero.current}
        open={createGenero}
        setOpen={setCreateGenero}
      />
      <Container className="mt-12" maxWidth="lg">
        {relatorioData?.artes?.map((arte) => (
          <Accordion key={arte.arte.id}>
            <Box
              component={"div"}
              className="flex items-center w-full justify-between"
            >
              <AccordionSummary expandIcon={<MdOutlineKeyboardArrowDown />}>
                <Box component={"div"} className="flex items-center gap-5">
                  <Typography variant="body1">{arte.arte.nomeArte}</Typography>
                  <Typography variant="caption">
                    {arte.arte.generosArte.length} subgêneros
                  </Typography>
                </Box>
              </AccordionSummary>

              <IconButton
                onClick={() => {
                  arteId.current = arte.arte.id;
                  setOpen(true);
                }}
              >
                <MdEdit />
              </IconButton>
              <IconButton
                onClick={() => {
                  arteId.current = arte.arte.id;
                  setDeleteDialog(true);
                }}
                color="error"
              >
                <MdDelete />
              </IconButton>
            </Box>

            <AccordionDetails>
              <Grid container>
                <Grid size={8}>
                  <List>
                    {arte.arte.generosArte.length >= 1 ? (
                      arte.arte.generosArte.map((g) => (
                        <GenerosArteItem key={g.id} g={g} />
                      ))
                    ) : (
                      <Typography
                        align="center"
                        color="textDisabled"
                        variant="subtitle1"
                      >
                        Nenhum genero criado para essa de arte
                      </Typography>
                    )}

                    <Stack className="pt-5 items-center">
                      <Button
                        onClick={() => {
                          ArteIdCreateGenero.current = arte.arte.id;
                          setCreateGenero(true);
                        }}
                        endIcon={<MdAdd />}
                        variant="outlined"
                      >
                        Adicionar Gênero de arte
                      </Button>
                    </Stack>
                  </List>
                </Grid>
                <Grid size={4}>
                  <Container className=" h-full flex flex-col items-center justify-center">
                    <Typography align="center" variant="h6">
                      Artistas que selecionaram {arte.arte.nomeArte}
                    </Typography>
                    <Gauge
                      text={({ value, valueMax }) => `${value} / ${valueMax}`}
                      height={220}
                      valueMax={relatorioData.artistasCadastrados}
                      value={arte.quantidadeArtistas}
                    />
                  </Container>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
}
