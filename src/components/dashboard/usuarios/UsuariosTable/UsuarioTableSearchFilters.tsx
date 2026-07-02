import {
  status,
  TipoConta,
  TipoStatus,
  usuarioStatus,
} from "@/models/enumeration/enums";
import { UsuarioListFilters } from "@/models/request/paged/UsuarioListFilters";
import { useCidadeList, useUfList } from "@/services/IBGEService";
import {
  Box,
  Container,
  MenuItem,
  Popover,
  Select,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type UsuarioTableSearchFiltersProps = {
  anchor: HTMLButtonElement | null;
  handleAnchor: (value: HTMLButtonElement | null) => void;
};

export function UsuarioTableSearchFilters({
  anchor,
  handleAnchor,
}: UsuarioTableSearchFiltersProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { data: cidadeData } = useCidadeList(searchParams.get("uf") ?? "");
  const { data: ufData } = useUfList();

  const { replace } = useRouter();

  function handleFiltro(tipo: keyof UsuarioListFilters, valor: string | null) {
    const params = new URLSearchParams(searchParams);
    params.set("page", "0");
    if (valor !== "" && valor !== null) {
      params.set(tipo, valor);
    } else {
      params.delete(tipo);
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Popover
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      anchorEl={anchor}
      onClose={() => handleAnchor(null)}
      open={Boolean(anchor)}
    >
      <Container className="p-3">
        <Typography align="center" variant="h5">
          Buscar por
        </Typography>
        <Stack className="gap-5">
          <Box
            component="div"
            className="flex gap-10 items-center justify-between"
          >
            <Box>
              <Typography variant="subtitle2">Tipo de usuário</Typography>
              <ToggleButtonGroup
                value={searchParams.get("tipoConta")}
                onChange={(e, v) => {
                  handleFiltro("tipoConta", v);
                }}
                color="primary"
                size="small"
                exclusive
              >
                <ToggleButton size="small" value={"ARTISTA"}>
                  Artista
                </ToggleButton>
                <ToggleButton value={"CONTRATANTE"}>Contratante</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <Box>
              <Typography>Status da conta</Typography>
              <Select
                displayEmpty
                value={searchParams.get("tipoStatus") ?? "ATIVO"}
                onChange={(e) => {
                  handleFiltro("tipoStatus", e.target.value);
                }}
                size="small"
              >
                <MenuItem value={""} disabled>
                  <em>Status da conta</em>
                </MenuItem>
                {usuarioStatus.map((st) => (
                  <MenuItem value={st}>{st}</MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
          <Box component={"div"} className="flex items-center gap-5">
            <Typography>UF</Typography>
            <Select
              displayEmpty
              value={searchParams.get("uf") ?? ""}
              onChange={(e) => {
                handleFiltro("uf", e.target.value as string);
              }}
              size="small"
            >
              <MenuItem value="" disabled>
                <em>UF</em>
              </MenuItem>
              {ufData?.data.map((uf) => (
                <MenuItem value={uf.sigla}>{uf.sigla}</MenuItem>
              ))}
            </Select>

            <Typography>Cidade</Typography>
            <Select
              displayEmpty
              value={searchParams.get("cidade") ?? ""}
              onChange={(e) => {
                handleFiltro("cidade", e.target.value as string);
              }}
              size="small"
            >
              <MenuItem value="" disabled>
                <em>Cidade</em>
              </MenuItem>
              {cidadeData?.data.map((cidade) => (
                <MenuItem value={cidade.nome}>{cidade.nome}</MenuItem>
              ))}
            </Select>
          </Box>
        </Stack>
      </Container>
    </Popover>
  );
}
