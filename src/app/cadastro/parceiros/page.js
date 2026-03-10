'use client'

import { useState } from "react"
import InputSenha from "@/components/InputSenha";
export default function CadastroParceiro() {
    const [nome, setNome] = useState("");
    const [razaoSocial, setRazaoSocial] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirm, setSenhaConfirm] = useState("");
    const [cpf, setCpf] = useState("");

    return (
        <div className="h-screen grid grid-cols-12">
            {/* FORM */}
            <div className="flex justify-start items-center flex-col col-span-4">
                <div className="flex flex-col p-5 w-[75%] gap-3">
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl text-center mb-3 font-light">É estabelecimento? Crie uma conta</h2>
                        <p className="font-light">Já tem uma conta? <a className="underline text-emerald-600" href="/login">Faça Login</a></p>
                    </div>
                    {/* CAMPOS */}
                    <div className="flex flex-col mb-3 gap-2">
                        {/* NOME EMPRESA */}
                        <div className="flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-briefcase text-2xl"></i>
                            <input
                            value={nome}
                            onChange={(e)=>setNome(e.target.value)}
                            type="text" className="text-lg w-full outline-none" placeholder="Nome da empresa" />
                        </div>
                        {/* RASÂO SOCIAL */}
                        <div className="flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-at text-2xl"></i>
                            <input
                            value={razaoSocial}
                            onChange={(e)=>setRazaoSocial(e.target.value)}
                            type="text" className="text-lg w-full outline-none" placeholder="Razão Social" />
                        </div>
                        {/* EMAIL */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-envelope text-2xl"></i>
                            <input
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="text" className="text-lg w-full outline-none" placeholder="E-mail" />
                        </div>
                        {/* SENHA */}
                        <InputSenha value={senha} setValue={(e)=>setSenha(e.target.value)} placeholder="Senha"/>
                        {/* CONFIRMAR SENHA */}
                        <InputSenha value={senhaConfirm} setValue={(e)=>setSenhaConfirm(e.target.value)}  placeholder="Confirme a senha"/>
                        {/* CNPJ */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-key text-2xl"></i>
                            <input
                            onChange={(e)=>setCpf(e.target.value)}
                            value={cpf}
                            type="text" className="text-lg w-full outline-none" placeholder="CNPJ" />
                        </div>
                    </div>
                    
                    {/* BOTÕES */}
                        <div className="flex flex-col items-center gap-5">
                        <a href="parceiros/cadastroEndereco" className="w-[50%] rounded-lg bg-teal-400 border border-teal-600 text-white p-2 text-center">
                            <i className="bi bi-arrow-right text-2xl"></i>
                        </a>
                        </div>
                </div>
            </div>
            
            {/* IMG COM FRASE */}
            <div className="col-span-8 bg-[url(/img/mic.jpg)] flex flex-col">
                <div className="flex flex-col items-center gap-3 p-4">
                    <h1 className="text-4xl text-white font-light">Artistas talentosos para o seu evento ou espaço.</h1>
                    <p className="w-[70%] text-center text-2xl text-white font-extralight">Conecte-se com artistas independentes e transforme seu estabelecimento em um palco para novas experiências.</p>
                </div>
            </div>
        </div>
    )
}