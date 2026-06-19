'use client'
import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { ChangeEventHandler, ReactNode, useState } from "react";
import { BsKeyFill } from "react-icons/bs";
import { FiEye, FiEyeOff } from "react-icons/fi";

type InputSenhaProps = TextFieldProps & {
  placeholder?: string;
  value?: string;
  children?: ReactNode;
  setValue?: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
}

export function InputSenha({...props}: InputSenhaProps) {
    const [mostrarSenha, setMostrarSenha] = useState(false);
  return (
    <TextField
    slotProps={{
      input: {
        type: mostrarSenha?"text":"password",
        size: "small",
        endAdornment: (
          <InputAdornment position="end">
            <IconButton size="small" onClick={()=>setMostrarSenha(prev => !prev)} >
              {mostrarSenha?<FiEye /> :  <FiEyeOff />}
            </IconButton>
          </InputAdornment>
        )
      }
    }}
    {...props}
    />
  );
}
