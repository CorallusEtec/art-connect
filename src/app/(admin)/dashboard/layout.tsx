import { DrawerAdmin } from "@/components/dashboard/DrawerAdmin";
import { MenuAdmin } from "@/components/dashboard/MenuAdmin";
import NavbarAdmin from "@/components/dashboard/NavbarAdmin";
import { UIAdminProvider } from "@/contexts/UIAdminContext";
import { Box, Toolbar } from "@mui/material";
import { ReactNode } from "react";

type Layout = {
  children: ReactNode;
};

export default async function DashboardLayout({ ...props }: Layout) {
  return (
    <UIAdminProvider>
      <Box sx={{ display: "flex" }}>
        <MenuAdmin />
        <DrawerAdmin />
        <Box
          className="h-screen"
          component={"main"}
          sx={{ flexGrow: 1, transition: "ease 200ms" }}
        >
          <Toolbar />
          {props.children}
        </Box>
        <NavbarAdmin />
      </Box>
    </UIAdminProvider>
  );
}
