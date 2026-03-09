'use client'

import InputSenha from "@/components/InputSenha";
import { useState } from "react";

export default function CadastroArtista() {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [cpf, setCpf] = useState();
    const [dataNasc, setDataNasc] = useState(new Date());
    const [sexo, setSexo] = useState();

    function handleData(value) {
        const data = value.target.value;
        setDataNasc(new Date(data));
    }
    console.log(dataNasc)

    return (
        <div className="h-screen grid grid-cols-12">
            {/* FORM */}
            <div className="flex justify-start items-center flex-col col-span-4">
                <div className="flex flex-col p-5 w-[75%] gap-3">
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl mb-3 font-light">É Artista? Crie uma conta</h2>
                        <p className="font-light">Já tem uma conta? <a className="underline text-emerald-600" href="/login">Faça Login</a></p>
                    </div>
                    {/* CAMPOS */}
                    <div className="flex flex-col mb-3 gap-2">
                        {/* NOME */}
                        <div className="flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-person text-2xl"></i>
                            <input
                            value={nome}
                            onChange={setNome}
                            type="text" className="text-lg w-full outline-none" placeholder="Nome Completo" />
                        </div>
                        {/* EMAIL */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-envelope text-2xl"></i>
                            <input
                            value={email}
                            onChange={setEmail}
                            type="text" className="text-lg w-full outline-none" placeholder="E-mail" />
                        </div>
                        {/* SENHA */}
                        <InputSenha value={senha} setValue={setSenha} placeholder="Senha"/>
                        {/* CONFIRMAR SENHA */}
                        <InputSenha  placeholder="Confirme a senha"/>
                        {/* CPF */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-key text-2xl"></i>
                            <input
                            onChange={setCpf}
                            value={cpf}
                            type="text" className="text-lg w-full outline-none" placeholder="CPF" />
                        </div>
                        {/* DATA NASC E SEXO */}
                        <div className="grid grid-cols-12">
                            {/* DATA NASC */}
                            <div className="flex col-span-7 flex-col">
                                <span className="text-lg">Data de Nascimento</span>
                                <input
                                onChange={(e)=>handleData(e)}
                                value={dataNasc}
                                max={new Date().toISOString().split("T")[0]}
                                type="date"
                                className="bg-stone-200 p-2 border border-stone-300 rounded-lg text-lg text-stone-600 cursor-pointer" />
                            </div>
                            {/* SEXO */}
                            <div className="flex col-span-4 col-start-9 flex-col">
                                <span className="text-lg">Sexo</span>
                                <select
                                value={sexo}
                                onChange={setSexo}
                                className="bg-stone-200 p-3 border border-stone-300 rounded-lg text-lg text-stone-600 cursor-pointer">
                                    <option>Feminino</option>
                                    <option>Masculino</option>
                                </select>
                            </div>
                        </div>
                   
                    </div>
                   
                    {/* BOTÕES */}
                     <div className="flex flex-col items-center gap-5">
                        <a href="cadastroEndereco" className="w-[50%] rounded-lg bg-teal-400 border border-teal-600 text-white p-2 text-center">
                            <i className="bi bi-arrow-right text-2xl"></i>
                        </a>
                     </div>
                </div>
            </div>
            
            {/* IMG COM FRASE */}
            <div className="col-span-8 bg-[url(/img/violao.jpeg)] flex flex-col">
                <div className="flex flex-col items-center gap-3 p-4">
                    <h1 className="text-4xl text-white font-light">O mundo precisa da sua arte</h1>
                    <p className="w-[70%] text-center text-2xl text-white font-extralight">Conecte sua arte a oportunidades reais e encontre estabelecimentos que estão procurando exatamente o que você faz.</p>
                </div>
            </div>
        </div>
    )
}