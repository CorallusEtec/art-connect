'use client'

import { InputIcon } from "@/components/InputIcon";
import {InputSenha} from "@/components/InputSenha";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsMailbox } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const route = useRouter();


  return (
    <div className="flex justify-center items-center">

      {/* CONTAINER PRICIPAL */}
      <div className="grid grid-cols-12 border border-cinza-100">
        {/* BANNER */}
        <div className="flex col-span-4 bg-cover" style={{backgroundImage: "url('assets/bg/mic.jpg')"}}>
        </div>
        
        {/* LOGIN UI */}
        <div className="flex col-span-8 p-20">
          
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
