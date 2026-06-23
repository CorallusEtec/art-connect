"use client";

import { AppBar, IconButton, Toolbar } from "@mui/material";

import { BiMenu } from "react-icons/bi";
import { Logo } from "../Logo";
import { BsPersonCircle } from "react-icons/bs";
import { useNavbar } from "@/contexts/UIAdminContext";
export default function NavbarAdmin() {
  const { handleOpenMenu, toggleDrawer } = useNavbar();
  //text-white bg-azul-200
  return (
    <>
      {/* NAVBAR */}
      <AppBar
        variant="elevation"
        color="primary"
        //className=" bg-azul-400 p-1 text-white px-3"]
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        position="sticky"
      >
        <Toolbar className="flex justify-between">
          {/* MENU */}
          <div className="flex items-center gap-6">
            <IconButton onClick={toggleDrawer}>
              <BiMenu color="" className="text-white text-3xl" />
            </IconButton>
            <Logo />
          </div>

          {/* PERFIL */}

          <IconButton onClick={handleOpenMenu} className="cursor-pointer">
            <BsPersonCircle className="text-3xl text-white" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
