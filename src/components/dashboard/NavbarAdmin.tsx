'use client'

import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { SideBarAdmin } from "./SideBarAdmin";
import { AppBar, Box, Button, Divider, Drawer, IconButton, ListItem, ListItemButton, Menu, MenuItem, Toolbar } from "@mui/material";
import { MdSpaceDashboard } from "react-icons/md";
import { BiMenu, BiSolidBriefcase } from "react-icons/bi";
import { Logo } from "../Logo";
import { BsBook, BsBoxArrowLeft, BsGearFill, BsPerson, BsPersonCircle } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { RiBrushAiFill } from "react-icons/ri";
export default function NavbarAdmin() {

    const [drawer, setDrawer] = useState(false);
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);
    
    const menu = Boolean(anchor)
    const router = useRouter()

    function toggleDrawer(state: boolean) {
        setDrawer(state);
    }

    async function logout() {
        await fetch('/api/auth/logout', { method: 'POST' });
         window.location.href = '/login';
    }

    function handleOpenMenu(event: React.MouseEvent<HTMLElement>) {
        setAnchor(event.currentTarget);
    }

    function handleCloseMenu() {
        setAnchor(null);
    }

    const drawerRoutes = [
        {title: "Dashboard", icon: <IoStatsChart />, url: "/dashboard"},
        {title: "Artes", icon: <RiBrushAiFill />, url: "/dashboard/artes"},
        {title: "Usuários", icon: <FaUser />, url: "/dashboard/usuarios"}
    ]

    return (
        <>
        {/* NAVBAR */}
            <AppBar className=" bg-azul-400 p-1 text-white px-3" position="sticky">
                <Toolbar className="flex justify-between">
                    {/* MENU */}
                    <div className="flex items-center gap-6">
                        <IconButton onClick={()=>toggleDrawer(true)}>
                        <BiMenu className="text-white text-3xl" />
                        </IconButton>
                    <Logo  />
                    </div>
                    
                       
                   
                    {/* PERFIL */}
        
                        <IconButton onClick={handleOpenMenu} className="cursor-pointer">
                            <BsPersonCircle className="text-3xl text-white" />
                        </IconButton>
                   
                </Toolbar>
            </AppBar>            
            {/* DRAWER */}
            <Drawer open={drawer} onClose={()=>toggleDrawer(false)} anchor='left'>
            
                <Box component="div" className="bg-azul-200 h-full text-white">
                    <ListItem className="flex justify-end" disablePadding>
                        <ListItemButton onClick={()=>setDrawer(false)}>
                            <BiMenu className="text-3xl" />
                        </ListItemButton>
                    </ListItem>
                    {drawerRoutes.map((item, index)=> (
                        <div key={index}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>{
                                setDrawer(false);
                                redirect(item.url);
                            }
                                
                                } className="gap-5">
                                <div className="text-3xl">
                                    {item.icon}
                                </div>
                                <span className="font-medium">{item.title}</span>
                            </ListItemButton>
                        </ListItem>
                        <Divider variant="middle" />
                        </div>
                    ))}
                </Box>
            </Drawer>
            {/* MENU  */}
            <Menu open={menu} onMouseLeave={handleCloseMenu} anchorEl={anchor} onClose={handleCloseMenu}>
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
        </>
    )
}