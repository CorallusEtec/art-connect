"use client";

import { useMenu } from "@/contexts/UIAdminContext";
import { Divider, Menu, MenuItem } from "@mui/material";
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
        <BsPerson />
        <span>Dados e credenciais</span>
      </MenuItem>
      <MenuItem className="flex gap-2">
        <BsGearFill />
        <span>Configurações</span>
      </MenuItem>
      <MenuItem className="flex gap-2">
        <BsBook />
        <span>Sobre o Art Connect</span>
      </MenuItem>
      <Divider />
      <MenuItem onClick={logout} className="text-red-500 gap-2">
        <BsBoxArrowLeft />
        <span>Sair</span>
      </MenuItem>
    </Menu>
  );
}
