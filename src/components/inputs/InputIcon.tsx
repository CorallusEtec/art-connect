import { InputAdornment, TextField, TextFieldProps } from "@mui/material"
import { ReactNode } from "react"

export type InputIconProps = TextFieldProps & {
    children?: ReactNode
}


export function InputIcon({children=<></>, ...props}: InputIconProps) {
    return (
        <TextField slotProps={{
            input: {
                size: "small",
                startAdornment: (
                    <InputAdornment position="start">
                        {children}
                    </InputAdornment>
                )
            }
        }} {...props}/>
    )
}