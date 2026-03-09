'use client'
import { useState } from "react";
export default function InputSenha({ placeholder, value, setValue }) {
    const [mostrarSenha, setMostrarSenha] = useState(false);
  return (
    <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
      <i className="bi bi-lock text-2xl"></i>
      <input
        type={mostrarSenha ? "text" : "password"}
        className="text-lg w-full outline-none"
        value={value}
        onChange={setValue}
        placeholder={placeholder}
      />
      <button
        onClick={() => setMostrarSenha(!mostrarSenha)}
        className="cursor-pointer"
      >
        <i className={mostrarSenha ? "bi bi-eye" : "bi bi-eye-slash"}></i>
      </button>
    </div>
  );
}
