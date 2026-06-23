"use client";

import { AppBar, IconButton, Toolbar, useTheme } from "@mui/material";

import { BiMenu } from "react-icons/bi";
import { Logo } from "../Logo";
import { BsPersonCircle } from "react-icons/bs";
import { useNavbar } from "@/contexts/UIAdminContext";
export default function NavbarAdmin() {
  const { handleOpenMenu, toggleDrawer } = useNavbar();
  const theme = useTheme();
  //text-white bg-azul-200
  return (
    <>
      {/* NAVBAR */}
      <AppBar
        variant="elevation"
        color="primary"
        //className=" bg-azul-400 p-1 text-white px-3"]
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        position="fixed"
      >
        <Toolbar className="flex justify-between">
          {/* MENU */}
          <div className="flex items-center gap-6">
            <IconButton onClick={toggleDrawer}>
              <BiMenu
                color={theme.palette.primary.contrastText}
                className="text-3xl"
              />
            </IconButton>
            <Logo />
          </div>

          {/* PERFIL */}

          <IconButton onClick={handleOpenMenu} className="cursor-pointer">
            <BsPersonCircle
              color={theme.palette.primary.contrastText}
              className="text-3xl"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
