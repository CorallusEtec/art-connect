import { AnchorHTMLAttributes } from "react"

export type SideBarItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    
}

export function SideBarItem({...props}: SideBarItemProps) {
    return (
        <a className="cursor-pointer flex gap-2 hover:bg-azul-200 p-3" {...props}>
            {props.children}
            <span>{props.title}</span>
        </a>
    )
}