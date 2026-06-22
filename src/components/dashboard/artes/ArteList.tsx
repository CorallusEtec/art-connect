"use client";
import { useRelatorio } from "@/services/AdminService";
import {
  useAddArte,
  useDeleteArte,
  useListarArtes,
} from "@/services/ArteService";
import { useDeleteGeneroArte } from "@/services/GeneroArteService";
import {
  Accordion,
  AccordionActions,
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
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Gauge } from "@mui/x-charts";
import { useRef, useState } from "react";
import { MdDelete, MdEdit, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GenerosArteItem } from "./GenerosArteItem";

export function ArteList() {
  const { data: relatorioData, isLoading } = useRelatorio();
  const [deleteDialog, setDeleteDialog] = useState(false);
  const { mutate: deleteArte, isSuccess, error } = useDeleteArte();
  const arteId = useRef(0);

  if (isLoading) return <CircularProgress />;
  console.log(error);
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
              if (isSuccess) {
                setDeleteDialog(false);
              }
            }}
            variant="contained"
            color="error"
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>

      <Container className="mt-12" maxWidth="lg">
        {relatorioData?.artes?.map((arte) => (
          <Accordion key={arte.arte.id}>
            <AccordionSummary expandIcon={<MdOutlineKeyboardArrowDown />}>
              <Box
                component={"div"}
                className="flex items-center w-full justify-between"
              >
                <Typography variant="body1">{arte.arte.nomeArte}</Typography>
                <Typography variant="caption">
                  {arte.arte.generosArte.length} subgêneros
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box component="div" className="flex justify-end items-center">
                <IconButton>
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
              <Grid container>
                <Grid size={8}>
                  <List>
                    {arte.arte.generosArte.length > 1 ? (
                      arte.arte.generosArte.map((g) => (
                        <GenerosArteItem key={g.id} g={g} />
                      ))
                    ) : (
                      <List>
                        <ListItem>
                          <ListItemText>
                            <Typography>Nenhum genero de arte</Typography>
                          </ListItemText>
                        </ListItem>
                      </List>
                    )}
                  </List>
                </Grid>
                <Grid size={4}>
                  <Gauge
                    text={({ value, valueMax }) => `${value} / ${valueMax}`}
                    height={220}
                    valueMax={relatorioData.artistasCadastrados}
                    value={arte.quantidadeArtistas}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
}
