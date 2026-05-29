import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlinePendingActions } from "react-icons/md";

export default function Contratantes() {
    return (
        <>
       
        <div className="grid grid-cols-12 mt-20">

            {/* SUP ESQUERDO */}
            <div className="col-span-6 flex flex-col gap-6 items-center">
                <div className="grid grid-cols-6 gap-5">
                    <h2 className="col-start-2 font-light text-3xl">Contratantes</h2>
                </div>
                
                {/* DIV DE CARDS IMPORTANTES */}
                <div className="grid grid-cols-6 gap-5">
                    {/* NUMERO DE  CONTRATANTES */}
                    <div className="col-start-2 col-span-2 flex flex-col gap-5 border border-cinza-100 rounded-lg p-5 shadow-2xl">
                        <div className="flex justify-center items-center gap-4">
                            <span className="font-semibold text-azul-500 text-3xl">0</span>
                            <AiOutlineUsergroupAdd className="text-4xl text-azul-500" />
                        </div>
                        <h3 className="text-center text-lg font-medium text-cinza-600">X novos contratantes essa semana</h3>
                    </div>

                    {/* CONTRATANTES PENDENTES */}
                    <div className="col-span-2 flex flex-col gap-5 border border-cinza-100 rounded-lg p-5 shadow-2xl">
                        <div className="flex justify-center items-center gap-4">
                            <span className="font-semibold text-vermelho-400 text-3xl">0</span>
                            <MdOutlinePendingActions className="text-4xl text-vermelho-400" />
                        </div>
                        <h3 className="text-center text-lg font-medium text-vermelho-300">X contratantes pendentes</h3>
                    </div>
                </div>
                
            </div>  
        </div>
        </>
    )
}