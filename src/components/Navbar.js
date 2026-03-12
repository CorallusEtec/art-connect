export default function Navbar() {
    return (
         <header className="flex justify-between bg-teal-500 p-1 text-white items-center">
            <img className="max-w-32 invert" src="/img/logo.svg" />
            <div className="flex gap-20 items-center text-xl">
                <a href="/">Sobre o Art Connect</a>
                <a href="/login">Entrar</a>
                <a href="/" className="bg-teal-700 border border-emerald-800 p-2 rounded-md">Crie uma Conta</a>
            </div>
        </header>
    )
}