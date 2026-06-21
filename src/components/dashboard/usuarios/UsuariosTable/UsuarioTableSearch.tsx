import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Popover,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MouseEvent, useState } from "react";
import { IoFilter } from "react-icons/io5";
import { MdClear, MdSearch } from "react-icons/md";
import { UsuarioTableSearchFilters } from "./UsuarioTableSearchFilters";

export function UsuarioTableSearch() {
  const [input, setInput] = useState("");
  const [openFilters, setFilters] = useState<HTMLButtonElement | null>(null);
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function cleanInput() {
    setInput("");
    search("");
  }

  function search(valor: string) {
    const params = new URLSearchParams(searchParams);
    params.set("page", "0");
    if (valor.trim() !== "") {
      params.set("nome", valor);
    } else {
      params.delete("nome");
    }

    replace(`${pathname}?${params.toString()}`);
  }
  function handleFilter(e: HTMLButtonElement | null) {
    setFilters(e);
  }

  function deleteFilter(param: string) {
    const params = new URLSearchParams(searchParams);
    params.set("page", "0");
    params.delete(param);
    replace(`${pathname}?${params.toString()}`);
  }

  function renderFilterChips() {
    const filtros = new URLSearchParams(searchParams);

    filtros.delete("page");
    filtros.delete("size");

    return filtros
      .entries()
      .toArray()
      .map(([key, value]) => (
        <Chip
          color="primary"
          key={key}
          onDelete={() => deleteFilter(key)}
          label={value}
        />
      ));
  }

  return (
    <Grid container spacing={2}>
      <UsuarioTableSearchFilters
        handleAnchor={handleFilter}
        anchor={openFilters}
      />
      <Grid size={4}>
        <FormControl fullWidth variant="outlined">
          <Input
            size="medium"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Buscar usuário"
            endAdornment={
              input && (
                <InputAdornment position="end">
                  <IconButton onClick={cleanInput}>
                    <MdClear />
                  </IconButton>
                </InputAdornment>
              )
            }
            startAdornment={
              <InputAdornment position="start">
                <IconButton onClick={() => search(input)}>
                  <MdSearch />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid className="flex items-center gap-2" size={2}>
        <Button
          onClick={(e) => handleFilter(e.currentTarget)}
          endIcon={<IoFilter />}
          variant="outlined"
        >
          Filtros
        </Button>
        {renderFilterChips()}
      </Grid>
    </Grid>
  );
}
