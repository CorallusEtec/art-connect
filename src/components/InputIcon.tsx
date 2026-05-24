import { InputHTMLAttributes, ReactNode } from "react"

export type InputIconProps = InputHTMLAttributes<HTMLInputElement> & {
    children?: ReactNode
}


export function InputIcon({children=<></>, ...props}: InputIconProps) {
    return (
        <div className="flex flex-row border rounded-lg border-stone-300 gap-1.5 p-2 bg-cinza-50">
            {children}
            <input
            className="w-full outline-none"
            {...props}
            />
    </div>
    )
}