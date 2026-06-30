"use client";
import { CardDetails } from "@/components/CardDetails";
import { UsuariosTableContainer } from "@/components/dashboard/usuarios/UsuariosTable/UsuariosTableContainer";
import { useMutateUsuario, useRelatorio } from "@/services/AdminService";
import {
  Alert,
  Box,
  Container,
  Grid,
  Skeleton,
  Snackbar,
  Typography,
} from "@mui/material";
import { BiSolidBriefcase, BiSolidStar } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { TbUser, TbUserStar } from "react-icons/tb";

export default function AdminUsuarios() {
  const { data } = useRelatorio();
  return (
    <main className="flex mt-10 flex-col">
      <Container maxWidth="lg">
        <Grid spacing={1} container>
          <Grid size={4}>
            <Box component={"span"}>
              {data ? (
                <CardDetails
                  sx={{ backgroundColor: "whitesmoke" }}
                  insight={
                    data.artistasCadastrados + data.contratantesCadastrados
                  }
                  label={
                    <span className="text-xs text-azul-300">
                      Usuário cadastrados
                    </span>
                  }
                  acessory={<></>}
                >
                  <TbUser />
                </CardDetails>
              ) : (
                <Skeleton variant="rectangular" width={210} height={60} />
              )}
            </Box>
          </Grid>
          <Grid size={4}>
            <Box component={"span"}>
              {data ? (
                <CardDetails
                  sx={{ backgroundColor: "whitesmoke" }}
                  insight={data.artistasCadastrados}
                  label={
                    <span className="text-xs text-azul-300">
                      Artistas cadastrados
                    </span>
                  }
                  acessory={<BiSolidStar className="text-lg text-azul-300" />}
                >
                  <TbUserStar />
                </CardDetails>
              ) : (
                <Skeleton variant="rectangular" width={210} height={60} />
              )}
            </Box>
          </Grid>
          <Grid size={4}>
            <Box component={"span"}>
              {data ? (
                <CardDetails
                  sx={{ backgroundColor: "whitesmoke" }}
                  insight={data.contratantesCadastrados}
                  label={
                    <span className="text-xs text-azul-300">
                      Contratantes cadastrados
                    </span>
                  }
                  acessory={
                    <BiSolidBriefcase className="text-lg text-azul-300 " />
                  }
                >
                  <FaUserTie />
                </CardDetails>
              ) : (
                <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* TABELA */}
      <Box className="p-3">
        <UsuariosTableContainer />
      </Box>
    </main>
  );
}
