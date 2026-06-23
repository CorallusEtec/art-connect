"use client";

import { gStyles } from "@/styles/style";
import { createTheme, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
    palette: {
      primary: {
        main: "rgb(34, 90, 186)",
        contrastText: "rgb(255, 255, 255)",
      },
      mode: "light",
    },
    components: {
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none", // Remove a caixa alta globalmente
          },
        },
      },
    },
  });
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
