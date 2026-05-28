'use client'

import { InputIcon } from "@/components/inputs/InputIcon";
import {InputSenha} from "@/components/inputs/InputSenha";

import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { loginSchema } from '@/models/request/AuthLoginRequest';

import { AuthService } from "@/services/AuthService";
import { redirect } from "next/navigation";
import { Alert, Box, Button, Card, Container, Grid, Snackbar } from "@mui/material";
import { set } from "zod";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [buttonLoad, setButtonLoad] = useState(false);

  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState(false);

  async function login() {
    setButtonLoad(true)
    const validation = loginSchema.safeParse({email, senha});

    if(validation.success) {
      const request = await AuthService.login(validation.data);
      if(typeof request == "string") {
        handleErrorAlert(request);
        return;
      }
      redirect("/dashboard");
    } else {
      console.log(validation.error.issues[0].message);
      handleErrorAlert(validation.error.issues[0].message);
    }   
  }

  function handleErrorAlert(message: string) {
    setButtonLoad(false);
    setError(message);
    setAlert(!alert);
  }

  return (
    
    <div style={{backgroundImage: 'url("/assets/bg/violao.jpeg")'}} className="h-full bg-cover ">
      <Snackbar open={alert} autoHideDuration={2000} onClose={()=>setAlert(false)}>
        <Alert variant="filled" severity="error">{error}</Alert>
      </Snackbar>
      {/* CONTAINER PRICIPAL */}
      <Container maxWidth="sm" className="flex flex-col pt-20">
        <Card>
              {/* LOGIN UI */}
              <div className="flex flex-col p-10 rounded-r-lg">
                
                <div className="flex flex-col gap-5">
                  {/* HEADER */}
                  <div className="flex flex-col items-center">
                    <h2 className="font-bold text-2xl text-azul-700">Bem vindo ao Art Connect</h2>
                    <span className="text-md text-cinza-600">Faça login em sua conta</span>
                  </div>
                  {/* CAMPOS LOGIN */}
                  <div className="flex flex-col gap-3">
                    {/* EMAIL */}
                    <div className="flex flex-col">
                      <label className="font-semibold text-cinza-600" htmlFor="email">Email</label>
                      <InputIcon value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Insira seu email" type="email" required>
                        <MdOutlineMail className="text-cinza-600 text-2xl" />
                      </InputIcon>
                    </div>
                    {/* SENHA */}
                    <div className="flex flex-col">
                      <label className="font-semibold text-cinza-600" htmlFor="senha">Senha</label>
                      <InputSenha value={senha} onChange={(e)=>setSenha(e.target.value)} name="senha" placeholder="Insira sua senha" required/>
                    </div>
                    
                    {/* LOGAR */}
                    <div className="flex justify-center">
                      <Button type="submit" onClick={()=>login()} loading={buttonLoad} variant="contained" fullWidth>Logar</Button>
                    </div>
                  </div>
                </div>
              </div>
        </Card>
        
      </Container>
    </div>
  );
}
