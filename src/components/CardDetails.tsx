import { Box, BoxProps, Card, CardActionArea, CardContent, CardProps } from "@mui/material";
import { ReactNode } from "react";

type CardDetailsProps = CardProps & {
    label?:string
    acessory: ReactNode;
    children: ReactNode;
}

/**
 * ## CardDetails
 * 
 * @param param0 Props do componente
 * @returns Retorna componente de card usado na tela do administrador para visualização rapida de informação
 */
export function CardDetails({label="", acessory, children, ...props }: CardDetailsProps) {
    return (
        <Card {...props}>
            <CardActionArea >
                <CardContent className="flex justify-between items-center gap-2">
                    <span className="text-xs text-azul-300">{label}</span>
                    {acessory}
                </CardContent>
                <CardContent className="flex text-3xl justify-center mb-5 items-center gap-4">
                    <h2 className="font-medium">{0}</h2>
                    {children}
                </CardContent>
                
            </CardActionArea>
        </Card>
    )
}