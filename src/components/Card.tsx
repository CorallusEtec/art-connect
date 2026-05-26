import { ReactNode } from "react"
import { IconType } from "react-icons"

export type CardProps = {
    children: ReactNode,
    title: string,
    descricao: string
}

export function Card({...props}: CardProps) {


    return (
        <div className="group shadow-md/20 p-5 h-3/4 bg-cinza-50 grid grid-rows-3 border border-cinza-100 rounded-lg
        hover:bg-azul-400 hover:border-azul-500 transition-all duration-300 hover:p-15">
            <div className="flex row-span-1 items-center gap-2 text-4xl justify-center">
                {props.children}
                <span className="text-azul-300 group-hover:text-white">{props.title}</span>
            </div>
            <div className="flex row-span-2 items-center justify-center">
                <p className="text-balance text-xl font-light text-center text-azul-600 group-hover:text-white">{props.descricao}</p>
            </div>
        </div>
    )
}