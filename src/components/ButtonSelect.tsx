import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react"

export interface ButtonSelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    selected: boolean;
}

export function ButtonSelect({...props}: ButtonSelectProps) {

    const theme = {
        enable: {
            bg: "bg-azul-300 border border-azul-500 cursor-pointer p-3 px-8 rounded-full transition-all",
            text: "text-white font-medium text-2xl"
        },
        disable: {
            bg: "bg-white border border-azul-500 cursor-pointer p-3 px-8 rounded-full transition-all",
            text: "text-azul-300 font-medium text-2xl"
        }
    }

    return (
        <button  className={props.selected?theme.enable.bg:theme.disable.bg} {...props}>
            <span className={props.selected?theme.enable.text:theme.disable.text}>{props.title}</span>
        </button>
    )
}