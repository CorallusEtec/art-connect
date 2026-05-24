'use client'

import { InputIcon } from "@/components/InputIcon";
import {InputSenha} from "@/components/InputSenha";
import { Logo } from "@/components/Logo";
import { TextButton } from "@/components/TextButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const route = useRouter();


  return (
    
    <div className="grid grid-cols-8 min-h-[calc(50rem)] items-center">

      {/* CONTAINER PRICIPAL */}
      <div className="col-span-4 col-start-3 grid grid-cols-12 border rounded-lg shadow-2xl border-cinza-100">
        {/* BANNER */}
        <div className="flex col-span-6 p-3 bg-cover rounded-l-lg" style={{backgroundImage: "url('assets/bg/mic.jpg')"}}>
          <div className="">
            <Logo />
          </div>
        </div>
        
        {/* LOGIN UI */}
        <div className="flex justify-center col-span-6 p-20 rounded-r-lg">
          
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
                <InputIcon name="email" placeholder="Insira seu email" type="email" required>
                  <MdOutlineMail className="text-cinza-600 text-2xl" />
                </InputIcon>
              </div>
              {/* SENHA */}
              <div className="flex flex-col">
                <label className="font-semibold text-cinza-600" htmlFor="email">Senha</label>
                <InputSenha placeholder="Insira sua senha" required/>
              </div>
              {/* LOGAR */}
              <div className="flex justify-center">
                <TextButton>Logar</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
