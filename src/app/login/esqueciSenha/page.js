export default function Login() {
    return (
        <div className="flex h-screen items-center justify-center">
            {/* FORM */}
            <div className="flex justify-center items-center flex-col col-span-4">
                <div className="flex flex-col p-5 w-[75%] border-gray-200 border-2 rounded-4xl">
                    <h2 className="text-4xl mb-3 font-light text-center">Esqueceu a Senha?</h2>
                    <p className="text-1xl mb-3 text-gray-500 font-light text-center">Insira seu email de cadastro abaixo e vamos enviar instruções para redifinir sua senha.</p>
                    <div className="flex flex-col mt-6 mb-12 gap-4">
                        {/* EMAIL */}
                        <div className="flex flex-row items-center border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-envelope text-lg"></i>
                            <input type="email" className="text-lg w-full outline-none" placeholder="E-mail" />
                        </div>
                    </div>
                    {/* BOTÕES */}
                     <div className="flex flex-col items-center gap-5">
                        <a className="w-[50%] rounded-lg bg-teal-400 border border-teal-600 text-white p-2 text-center" href="">Redefinir Senha</a>
                        <a className="w-[50%] rounded-lg bg-white border border-teal-600 text-teal-600 p-2 text-center mb-20" href="">Voltar para o Login</a>
                     </div>
                </div>
            </div>
        </div>
    )
}
{/*h-dvh grid grid-cols-12*/} 