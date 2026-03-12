'use client'

import InputSenha from "@/components/InputSenha";
import LoginService from "@/services/LoginService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const route = useRouter();

  async function login() {
    const usuario = await LoginService.login(email, senha);
    sessionStorage.setItem('@login', JSON.stringify(usuario));
    route.push("/home");
  }

  return (
    <div className="h-dvh grid grid-cols-12">
      {/* FORM */}
      <div className="flex justify-center items-center flex-col col-span-4">
        <div className="flex flex-col p-5 w-[75%]">
          <h2 className="text-4xl mb-3 font-light">Faça Login</h2>
          {/* EMAIL E SENHA */}
          <div className="flex flex-col mb-3 gap-4">
            {/* EMAIL */}
            <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
              <i className="bi bi-envelope text-lg"></i>
              <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
                type="email"
                className="text-lg w-full outline-none"
                placeholder="E-mail"
              />
            </div>
            {/* SENHA */}
            <InputSenha value={senha} setValue={(e)=>setSenha(e.target.value)} placeholder="Senha" />
          </div>
          {/* LEMBRE DE MIM E ESQUECI SENHA */}
          <div className="flex justify-between mb-10">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="accent-emerald-600"
                name=""
                id=""
              />
              <span>Lembre-se de Mim</span>
            </div>
            <div className="flex">
              <a
                href="/login/esqueciSenha"
                className="text-emerald-600 underline"
              >
                Esqueci a senha
              </a>
            </div>
          </div>
          {/* BOTÕES */}
          <div className="flex flex-col items-center gap-5">
            <button
              onClick={()=>login()}
              className="cursor-pointer w-[50%] rounded-lg bg-teal-400 border border-teal-600 text-white p-2 text-center"
              
            >
              Entrar
            </button>
            <a
              className="w-[50%] rounded-lg bg-white border border-teal-600 text-teal-600 p-2 text-center"
              href=""
            >
              Entrar sem Login
            </a>
          </div>
        </div>
      </div>

      {/* IMG COM FRASE */}
      <div className="col-span-8 bg-[url(/img/loginBaila.jpg)] flex flex-col">
        <div className="flex flex-col items-center gap-3 p-4">
          <h1 className="text-4xl text-white font-light">
            O mundo precisa da sua arte
          </h1>
          <p className="w-[70%] text-center text-2xl text-white font-extralight">
            Conecte sua arte a oportunidades reais e encontre estabelecimentos
            que estão procurando exatamente o que você faz.
          </p>
        </div>
      </div>
    </div>
  );
}
