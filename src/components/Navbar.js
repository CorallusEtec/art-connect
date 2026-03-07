export default function Navbar() {
    return (
         <header className="flex justify-between bg-teal-400 p-3 text-white items-center">
            <h1 className="font-medium text-xl">Art Connect (Logo)</h1>
            <div className="flex gap-20 items-center text-xl">
                <a href="">Sobre o Art Connect</a>
                <a href="/login">Entrar</a>
                <a href="" className="bg-teal-600 border border-emerald-800 p-2 rounded-md">Crie uma Conta</a>
            </div>
        </header>
    )
}