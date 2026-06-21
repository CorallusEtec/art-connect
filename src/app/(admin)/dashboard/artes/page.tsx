import { ArteList } from "@/components/dashboard/artes/ArteList";
import { Box, Container, Fab, Stack, Typography } from "@mui/material";
import { MdAdd } from "react-icons/md";

export default function AdminArtes() {
  return (
    <Box component={"div"} className="p-5">
      <Container className="flex gap-5 flex-row items-center">
        <Typography variant="h4">Artes</Typography>
        <Fab size="small" variant="extended" color="primary">
          Adicionar arte
          <MdAdd size={20} />
        </Fab>
      </Container>
      <ArteList />
    </Box>
  );
}
