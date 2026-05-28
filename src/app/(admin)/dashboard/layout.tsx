import NavbarAdmin from "@/components/dashboard/NavbarAdmin"
import { RelatorioProvider } from "@/contexts/RelatorioContext";
import useQuery from "@/hooks/useQuery";
import { RelatorioResponse } from "@/models/response/RelatorioResponse";
import { AdminService } from "@/services/AdminService";
import { config } from "@/services/config";
import { cookies } from "next/headers";
import { ReactNode } from "react"

type Layout = {
    children: ReactNode
}

export default async function DashboardLayout({...props}: Layout) {

    const response = await useQuery({url: `${config.apiURL}/admin/relatorio`});

    const relatorio: RelatorioResponse = await response.json();


    
    return (
        <RelatorioProvider initialState={relatorio}>
            <NavbarAdmin />
            {props.children}
        </RelatorioProvider>
        
    )
}