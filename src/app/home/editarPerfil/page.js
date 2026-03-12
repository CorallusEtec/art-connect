'use client'

import SelectUf from "@/components/SelectUf"

export default function EditarPerfil() {
    return (
        <div className="mt-7">
            <div className="flex justify-center">
                <h1 className="text-4xl text-stone-800">Editar Perfil</h1>
            </div>
            {/* FOTO */}
            <div className="flex justify-center mb-15">
                <div className="flex items-center gap-2">
                    <i className="text-7xl bi bi-person-circle"></i>
                    <div className="flex flex-col gap-1.5">
                        <button className="flex items-center gap-1 border border-stone-200 rounded-lg p-2">
                            <i className="bi bi-pencil-fill"></i>
                            <span>Alterar foto</span>
                        </button>
                        <button className="flex items-center gap-1 border border-red-600 rounded-lg p-2">
                            <i class="text-red-600 bi bi-trash"></i>
                            <span className="text-red-600" >Remover foto</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 p-3">
                {/* CONTATOS GERAL */}
                <div className="flex flex-col justify-center col-span-4 col-start-2 gap-4">
                    {/* NOME */}
                    <div className="flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                        <i className="bi bi-person text-2xl"></i>
                        <input
                        
                        type="text" className="text-lg w-full outline-none" placeholder="Nome Completo" />
                    </div>
                    {/* TIPO DE ARTE */}
                    <div className="flex col-span-8 col-start-3 flex-col">
                        <span className="text-lg">Tipo de arte</span>
                        <select className="border text-lg rounded-lg p-3 text-stone-600 border-stone-300 bg-stone-200">
                            <option>Tipos de arte</option>
                            {/*listaArtes.map(arte=>(
                                <option key={arte.id} value={arte.id}>{arte.nomeArte}</option>
                            ))*/}
                        </select>
                    </div>
                </div>
                {/* ENDEREÇO */}
                <div className="flex flex-col col-start-8 col-span-4
                ">
                    <span className="text-lg">Endereço</span>
                    <div className="flex flex-col mb-3 gap-2">
                        {/* LOGRADOURO */}
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-pin-map text-lg"></i>
                                <input type="text" className="text-lg w-full outline-none" placeholder="Logradouro" />
                            </div>
                            <div className="col-span-4 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-hash text-lg"></i>
                                <input type="text" className="text-lg w-full outline-none" placeholder="Numero" />
                            </div>
                        </div>
                        {/* COMPLEMENTO */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-map text-lg"></i>
                            <input type="text" className="text-lg w-full outline-none" placeholder="Complemento" />
                        </div>
                        {/* CEP E BAIRRO */}
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-4 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-geo-alt text-lg"></i>
                                <input type="text" className="text-lg w-full outline-none" placeholder="CEP" maxLength="9" />
                            </div>
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <input type="text" className="text-lg w-full outline-none" placeholder="Bairro" />
                            </div>
                        </div>
                        {/* CIDADE */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-buildings text-lg"></i>
                            <input type="text" className="text-lg w-full outline-none" placeholder="Cidade" />
                        </div>
                        {/* UF */}
                        <div className="flex flex-col items-center">
                            <SelectUf />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}