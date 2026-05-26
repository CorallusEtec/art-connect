import NavbarAdmin from "@/components/dashboard/NavbarAdmin"
import { ReactNode } from "react"

type Layout = {
    children: ReactNode
}

export default function Layout({...props}: Layout) {
    return (
        <div className="">
        <NavbarAdmin />
        {props.children}
        </div>
        
    )
}