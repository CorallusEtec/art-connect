import Navbar from "@/components/Navbar"
import { ReactNode } from "react"
export default function LoginLayout({ children }: { children: ReactNode}) {
    return (
        <div className="">
            
            {children}
        </div>
    )
}