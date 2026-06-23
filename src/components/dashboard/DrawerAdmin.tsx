"use client";

import { useDrawer } from "@/contexts/UIAdminContext";
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
import { redirect } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { RiBrushAiFill } from "react-icons/ri";

export function DrawerAdmin() {
  const drawerRoutes = [
    {
      title: "Dashboard",
      icon: <IoStatsChart color="white" />,
      url: "/dashboard",
    },
    {
      title: "Artes",
      icon: <RiBrushAiFill color="white" />,
      url: "/dashboard/artes",
    },
    {
      title: "Usuários",
      icon: <FaUser color="white" />,
      url: "/dashboard/usuarios",
    },
  ];

  const theme = useTheme();
  const { drawer, toggleDrawer } = useDrawer();
  return (
    <Drawer
      variant="permanent"
      open={drawer}
      onClose={toggleDrawer}
      anchor="left"
    >
      <Box
        sx={{
          height: "100%",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Toolbar />
        <List>
          {drawerRoutes.map((item, index) => (
            <ListItem divider key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  toggleDrawer();
                  redirect(item.url);
                }}
                className="gap-5"
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText className="text-white" primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
