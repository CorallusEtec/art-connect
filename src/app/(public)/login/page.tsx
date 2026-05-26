'use client'

import { InputIcon } from "@/components/inputs/InputIcon";
import {InputSenha} from "@/components/inputs/InputSenha";
import { Logo } from "@/components/Logo";
import { TextButton } from "@/components/TextButton";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { loginSchema } from '@/models/request/AuthLoginRequest';
import { $ZodIssue } from 'zod/v4/core';
import { ShowErrors } from '@/components/ShowErrors';
import { AuthService } from "@/services/AuthService";
import { redirect } from "next/navigation";
import { Alert, Snackbar } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState(false);

  async function login() {
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
    setError(message);
    setAlert(!alert);
  }

  return (
    
    <div className="grid grid-cols-12">
      <Snackbar open={alert} autoHideDuration={2000} onClose={()=>setAlert(false)}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      {/* CONTAINER PRICIPAL */}
      <div className="mt-30 col-span-10 col-start-2 grid grid-cols-12 border rounded-lg shadow-2xl border-cinza-100">
        
        
        {/* BANNER */}
        <div className="flex col-span-6 p-3 bg-center bg-cover rounded-l-lg" style={{backgroundImage: "url('assets/bg/mic.jpg')"}}>
          <div className="">
            <Logo />
          </div>
        </div>
        
        {/* LOGIN UI */}
        <div className="flex justify-center col-span-6 p-10 rounded-r-lg">
          
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
                <TextButton type="submit" onClick={()=>login()}>Logar</TextButton>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
