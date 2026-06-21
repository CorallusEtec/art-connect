"use client";
import { useListarArtes } from "@/services/ArteService";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Gauge } from "@mui/x-charts";
import { MdDelete, MdEdit, MdOutlineKeyboardArrowDown } from "react-icons/md";

export function ArteList() {
  const { data, isLoading } = useListarArtes();

  if (isLoading) return <CircularProgress />;
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid size={6}>
          <List className="flex flex-col gap-5">
            {data?.data.content.map((arte) => (
              <Paper key={arte.id}>
                <Box
                  component="div"
                  className="flex p-2 items-center w-full justify-between"
                >
                  <ListItem>{arte.nomeArte}</ListItem>
                  <Box component="div" className="flex items-center">
                    <IconButton>
                      <MdEdit />
                    </IconButton>
                    <IconButton color="error">
                      <MdDelete />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            ))}
          </List>
        </Grid>
        <Grid size={6}>
          <Container>
            <Paper className="p-5">
              <Typography variant="h6">Arte</Typography>

              <Gauge
                text={({ value, valueMax }) => `${value} / ${valueMax}`}
                height={150}
                value={60}
              />
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
