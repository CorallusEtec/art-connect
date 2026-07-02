"use client";

import { useMenu } from "@/contexts/UIAdminContext";
import { Divider, Menu, MenuItem, Typography } from "@mui/material";
import { BsBook, BsBoxArrowLeft, BsGearFill, BsPerson } from "react-icons/bs";

export function MenuAdmin() {
  const { menu, handleCloseMenu, anchor } = useMenu();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  }

  return (
    <Menu
      open={menu}
      onMouseLeave={handleCloseMenu}
      anchorEl={anchor}
      onClose={handleCloseMenu}
    >
      <MenuItem className="flex gap-2">
        <BsBook />
        <Typography>Sobre o Art Connect</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={logout} className="text-red-500 gap-2">
        <BsBoxArrowLeft />
        <Typography>Sair</Typography>
      </MenuItem>
    </Menu>
  );
}
