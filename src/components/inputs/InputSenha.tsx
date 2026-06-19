'use client'
import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { ChangeEventHandler, ReactNode, useState } from "react";
import { BsKeyFill } from "react-icons/bs";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { LuKey } from "react-icons/lu";

type InputSenhaProps = TextFieldProps & {

}

export function InputSenha({...props}: InputSenhaProps) {
    const [mostrarSenha, setMostrarSenha] = useState(false);
  return (
    <TextField
    slotProps={{
      input: {
        type: mostrarSenha?"text":"password",
        size: "small",
        startAdornment: (
          <InputAdornment position="start">
            <LuKey className="text-xl" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="start">
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
