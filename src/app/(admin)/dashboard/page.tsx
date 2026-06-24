"use client";

import { CardDetails } from "@/components/CardDetails";
import { useRelatorio } from "@/services/AdminService";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import { BarChart, PieChart } from "@mui/x-charts";
import { BiSolidBriefcase, BiSolidStar } from "react-icons/bi";
import { BsFillShareFill } from "react-icons/bs";
import { CgInsights } from "react-icons/cg";
import { FaUserTie } from "react-icons/fa";

import { TbUserStar } from "react-icons/tb";

export default function AdminDashboard() {
  const { data } = useRelatorio();
  return (
    <Box
      className="bg-gray-100 flex h-full flex-col p-2 "
      sx={{ transition: "ease 200ms" }}
    >
      <Typography className="p-4" variant="h5">
        Bem vindo, Administrador
      </Typography>
      <Grid spacing={1} container>
        <Grid container size={8}>
          {/* Artistas cadastrados */}
          <Grid size={4}>
            <Box component={"span"}>
              {data ? (
                <CardDetails
                  insight={data.artistasCadastrados}
                  label="Artistas cadastrados"
                  acessory={<BiSolidStar className="text-lg text-azul-400" />}
                >
                  <TbUserStar />
                </CardDetails>
              ) : (
                <Skeleton variant="rectangular" width={210} height={60} />
              )}
            </Box>
          </Grid>

          {/* CONTRATANTES CADASTRADOS */}
          <Grid size={4}>
            <Box component={"span"}>
              {data ? (
                <CardDetails
                  insight={data.contratantesCadastrados}
                  label="Contratantes cadastrados"
                  acessory={
                    <BiSolidBriefcase className="text-lg text-azul-500 " />
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
          {/* Publicações Realizadas */}
          <Grid size={4}>
            <Box component={"span"}>
              {data ? (
                <CardDetails
                  insight={data.publicacoesRealizadas}
                  label="Publicações realizadas"
                  acessory={
                    <BsFillShareFill className="text-lg text-azul-500 " />
                  }
                >
                  <CgInsights />
                </CardDetails>
              ) : (
                <>
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton />
                  <Skeleton />
                </>
              )}
            </Box>
          </Grid>
          {/* PUBLICAÇÕES NAS ULTIMAS SEMANAS */}
          <Grid size={12}>
            <Box>
              <Card>
                <CardContent>
                  <Typography variant="h6">Publicações nessa semana</Typography>
                </CardContent>
                <CardContent>
                  {data && (
                    <BarChart
                      sx={{ transition: "ease 200ms" }}
                      xAxis={[
                        {
                          data: data.publicacaoSemana.map((item) =>
                            new Date(item[0]).toLocaleDateString(),
                          ),
                        },
                      ]}
                      series={[
                        { data: data.publicacaoSemana.map((item) => item[1]) },
                      ]}
                      width={800}
                      height={250}
                    />
                  )}
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
        {/* (ARTES E SUBGENEROS PROXIMA PRÉVIA 18/06) Publicações nos ultimos 7 dias  */}
        <Grid size={4}>
          <Box>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6">Artes mais selecionadas</Typography>
                </CardContent>
                <CardContent>
                  <PieChart
                    sx={{ transition: "ease 2s" }}
                    series={[
                      {
                        data: data
                          ? data?.artes.map((arte) => ({
                              value: arte.quantidadeArtistas,
                              id: arte.arte.id,
                              label: arte.arte.nomeArte,
                            }))
                          : [],
                        innerRadius: 70,
                        outerRadius: 100,
                      },
                    ]}
                    height={200}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
