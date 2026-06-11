import NavbarAdmin from "@/components/dashboard/NavbarAdmin"
import { ReactNode } from "react"

type Layout = {
    children: ReactNode
}

export default async function DashboardLayout({...props}: Layout) {
    return (
        <>
            <NavbarAdmin />
            {props.children}
        </>
        
    )
}