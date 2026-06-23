import { DrawerAdmin } from "@/components/dashboard/DrawerAdmin";
import { MenuAdmin } from "@/components/dashboard/MenuAdmin";
import NavbarAdmin from "@/components/dashboard/NavbarAdmin";
import { UIAdminProvider } from "@/contexts/UIAdminContext";
import { Box } from "@mui/material";
import { ReactNode } from "react";

type Layout = {
  children: ReactNode;
};

export default async function DashboardLayout({ ...props }: Layout) {
  return (
    <UIAdminProvider>
      <NavbarAdmin />
      <MenuAdmin />
      <DrawerAdmin />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        {props.children}
      </Box>
    </UIAdminProvider>
  );
}
