import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react"

export type ButtonSelectProps = {
    enable: boolean,
    title: string,
    onClick?: () => void,
}

export function ButtonSelect({...props}: ButtonSelectProps) {

    const theme = {
        enable: {
            bg: "bg-azul-300 border border-azul-500 cursor-pointer p-3 px-8 rounded-full",
            text: "text-white font-medium text-2xl"
        },
        disable: {
            bg: "bg-white border border-azul-500 cursor-pointer p-3 px-8 rounded-full",
            text: "text-azul-300 font-medium text-2xl"
        }
    }

    return (
        <button onClick={props.onClick}  className={props.enable?theme.enable.bg:theme.disable.bg} {...props}>
            <span className={props.enable?theme.enable.text:theme.disable.text}>{props.title}</span>
        </button>
    )
}