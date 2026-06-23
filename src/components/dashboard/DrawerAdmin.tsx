"use client";

import { useDrawer } from "@/contexts/UIAdminContext";
import { gStyles } from "@/styles/style";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useTheme,
} from "@mui/material";
import { redirect, usePathname, useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { RiBrushAiFill } from "react-icons/ri";

export function DrawerAdmin() {
  const drawerRoutes = [
    {
      title: "Dashboard",
      icon: <IoStatsChart size={22} color="white" />,
      url: "/dashboard",
    },
    {
      title: "Artes",
      icon: <RiBrushAiFill size={22} color="white" />,
      url: "/dashboard/artes",
    },
    {
      title: "Usuários",
      icon: <FaUser size={22} color="white" />,
      url: "/dashboard/usuarios",
    },
  ];
  const pathname = usePathname();
  const theme = useTheme();
  const { drawer, toggleDrawer } = useDrawer();
  return (
    <Drawer
      variant="permanent"
      open={drawer}
      onClose={toggleDrawer}
      anchor="left"
      sx={{
        width: drawer ? 200 : 55,

        flexShrink: 0,
        "& .MuiDrawer-paper": {
          overflow: "hidden",
          transition: "ease 200ms",
          width: drawer ? 200 : 55,
          boxSizing: "border-box",
          backgroundColor:
            theme.palette.primary.main /*theme.palette.primary.main*/,
        },
      }}
    >
      <Box>
        <Toolbar />
        <List>
          {drawerRoutes.map((item, index) => (
            <ListItem divider key={index} disablePadding>
              <ListItemButton
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: gStyles.azul[500],
                  },
                }}
                onClick={() => redirect(item.url)}
                className="gap-5"
                selected={pathname == item.url}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  sx={{ color: theme.palette.primary.contrastText }}
                  primary={item.title}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
