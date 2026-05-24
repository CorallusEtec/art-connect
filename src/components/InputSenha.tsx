'use client'
import { ChangeEvent, ChangeEventHandler, EventHandler, HTMLElementType, HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode, useState } from "react";
import { BsKeyFill } from "react-icons/bs";
import { FiEye, FiEyeOff } from "react-icons/fi";

type InputSenhaProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  value?: string;
  children?: ReactNode;
  setValue?: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
}

export function InputSenha({setValue=undefined,
  children=<BsKeyFill className="text-cinza-600 text-2xl" />
  , ...props}: InputSenhaProps
) {
    const [mostrarSenha, setMostrarSenha] = useState(false);
  return (
    <div className="flex flex-row border rounded-lg border-stone-300 gap-1.5 p-2 bg-cinza-50">
      {children}
      
      <input
        type={mostrarSenha ? "text" : "password"}
        className="w-full outline-none"
        {...props}
      />
      <button
        onClick={() => setMostrarSenha(!mostrarSenha)}
        className="cursor-pointer"
      >
        <div className="text-xl text-cinza-500">
          {mostrarSenha ? <FiEye /> :  <FiEyeOff className="" />}
        </div>
      </button>
    </div>
  );
}
