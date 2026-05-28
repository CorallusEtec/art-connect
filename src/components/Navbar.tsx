'use client'

import { useState } from "react"
import { Logo } from "./Logo";
import { AppBar, Button, ButtonBase, Grid, IconButton, Toolbar } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Navbar() {

    const [showCadastro, setShowCadastro] = useState(false);
    const [mouseOn, setMouseOn] = useState(false);

    return (
        <>
            <AppBar className=" bg-azul-400 overflow-hidden" position="sticky" >
                <Toolbar className="flex justify-between">
                            <ButtonBase onClick={()=>redirect("/")}>
                                <Logo /> 
                            </ButtonBase>                  
                            <div className="flex items-center gap-5">
                                <ButtonBase onClick={()=>redirect("/")} className="text-white p-3">
                                    <span>Sobre o Art Connect</span>
                                </ButtonBase>
                                <Button variant="outlined" color="inherit"  onClick={()=>redirect("/login")}>
                                    Login
                                </Button>
                            </div>
                </Toolbar>
                
            </AppBar>
        </>
    )
}