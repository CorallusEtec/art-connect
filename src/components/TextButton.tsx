import { ButtonHTMLAttributes, ReactNode } from "react";

export type TextButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {

}


export function TextButton({...props}: TextButtonProps) {
    return (
        <button className="bg-azul-500 border
        border-azul-600 text-white p-3 w-full
        hover:bg-azul-400 hover:border-azul-500
        rounded cursor-pointer transition-all" {...props}>{props.children}</button>
    )
}