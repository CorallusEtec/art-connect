"use client"

import { RelatorioResponse } from "@/models/response/RelatorioResponse";
import { createContext, ReactNode, useContext, useState } from "react";

interface RelatorioContextType {
    relatorio: RelatorioResponse,
    setRelatorio: (relatorio: RelatorioResponse) => void
}


export const RelatorioContext = createContext<RelatorioContextType>({} as RelatorioContextType);

interface RelatorioProviderProps {
    children: ReactNode,
    initialState?: RelatorioResponse
}

export function RelatorioProvider({children, initialState = {} as RelatorioResponse}: RelatorioProviderProps) {
    const [relatorio, setRelatorio] = useState(initialState);

    return (
        <RelatorioContext.Provider value={{ relatorio, setRelatorio}}>
            {children}
        </RelatorioContext.Provider>
    )
}

export function useRelatorio() {
    const context = useContext(RelatorioContext);

    if(!context) {
        throw new Error("useRelatorio deve ser usado dentro de um provider");
    }

    return context;
}