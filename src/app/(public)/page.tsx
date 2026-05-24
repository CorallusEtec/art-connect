'use client'

import { ButtonSelect } from "@/components/ButtonSelect";
import { Card } from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { BiSolidBriefcase } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { FaCheckSquare } from "react-icons/fa";

export default function Home() {
  const [option, setOption] = useState("busca");
  
  // Lista com os dados a serem consumidos na parte de funcionalidades do App
  const features = {
    "busca": {
      title: "Pesquise, Filtre e Encontre",
      targets: [
        "Pesquise por artistas ou postagens",
        "Use a filtragem para encontrar o seu perfil ideal",
        "Encontre o talento que você buscava"
      ]
    },
    "portifolio": {
      title: "Mostre sua arte, alcance interesses",
      targets: [
        "Crie publicações sobre sua arte",
        "Adicione tags para alcançar contratantes interessados",
        "Adicione seus contatos para negociar"
      ]
    },
    "contatos": {
      title: "",
      targets: [
        ""
      ]
    }
  }
  return (
    <>
      <Navbar />
      {/* BANNER */}
      <section id="banner">
        <div className="min-h-60 inset-shadow-md bg-contain flex items-center justify-center"
        style={{backgroundImage:"url('assets/bg/fundo.png')"}}>
          <h1 className="text-white font-semibold text-5xl">Conectando talentos à oportunidades reais</h1>
        </div>
      </section>
      {/* O QUE É O ART CONNECT */}
      <section id="conheca" className="mb-15">
        <div className="grid grid-cols-4">
          
          {/* DESCRICAO E DOWNLOADS */}
          <div className="flex flex-col col-span-2 gap-10 p-7">
            {/* DESCRICAO */}
            <div className="flex justify-end">
              <div className="flex flex-col gap-4 w-3/4">
                <h3 className="font-semibold text-3xl text-azul-600">O que é o Art Connect?</h3>
                <p className="w-4/5 font-light text-xl text-azul-500">O Art Connect é um aplicativo que conecta artistas
                  a contratantes por meio de portfólios personalizados
                  e busca avançada por perfil
                </p>
              </div>
            </div>
            
            {/* APP E DOWNLOAD*/}
            <div className="flex flex-col items-center">
              <img className="shadow-xl/20 border border-cinza-100 rounded-4xl aspect-square w-1/6"
              src="/assets/icons/splash-icon.png"
              alt="Icone Art Connect" />
              <img className="aspect-5/2 w-1/4" src="/assets/icons/nameBanner.png" alt="Art Connect" />
              {/* DOWNLOAD */}
              <div className="flex gap-5">
                <img src="/assets/icons/publisher/gplay.svg" alt="Google Play Store" />
                <img src="/assets/icons/publisher/appleStore.svg" alt="Google Play Store" />
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div className="flex items-center h-full p-3 flex-col col-span-2">
           <div className="flex flex-col h-full w-2/3 justify-around gap-10">

            <Card title="Artista"
              descricao="Monte seu portifólio com seus trabalhos e alcance possíveis contratantes."
            >
              <BsStar className="text-azul-400 group-hover:text-white" />
            </Card>

            <Card title="Contratante"
              descricao="Pesquise, filtre e encontre com facilidade artistas ideiais para o seu evento."
            >
              <BiSolidBriefcase className="text-azul-400 group-hover:text-white" />
            </Card>

           </div>
          </div>
        </div>
      </section>
      
      {/* CONHEÇA O APLICATIVO */}
      <section id="app" className="mb-30">
        {/* TITULO E BOTÕES DE FUNCIONALIDADES */}
        <div className="flex flex-col mb-20 items-center gap-3">
          <h2 className="font-medium text-azul-700 text-4xl">Conheça o Aplicativo</h2>
          {/* BOTÕES DE FUNCIONALIDADES */}
          <div className="flex gap-5">
            <ButtonSelect onClick={()=>setOption("busca")} selected={option=="busca"} title="Busca" />

            <ButtonSelect onClick={()=>setOption("portifolio")} selected={option=="portifolio"} title="Portifólio" />

            <ButtonSelect onClick={()=>setOption("contatos")} selected={option=="contatos"} title="Contatos" />
          </div>
        </div>
        {/* FEATURES E PRINT DO CELULAR */}
        <div className="grid grid-cols-6">
          {/* PRINT CELULAR */}
          <div className="col-span-3">
            <div className="flex justify-center">
              <img className="min-w-60" src="/assets/mock/celular.png" alt="App Art Connect" />
            </div>
          </div>
          {/* FUNCIONALIDADE E LISTA DE ITEMS */}
          <div className="col-span-3">
            <div className="flex justify-start mb-10">
              <h3 className="text-3xl text-stone-800">{features[option].title}</h3>
            </div>
            {/* LISTA DE ITEMS */}
            <div className="flex flex-col items-start">
              <div className="flex flex-col gap-10 ml-7">
                {features[option].targets.map((item:string)=>(
                  <div key={item} className="flex gap-3 items-center">
                    <FaCheckSquare className="text-azul-500 text-lg" />
                    <span className="text-xl text-azul-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
