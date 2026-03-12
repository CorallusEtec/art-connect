export default function Footer() {
    const dataAtual = new Date();
    return (
        <section className="bg-teal-800 p-2" id="footer">
            <div className="grid grid-cols-12">
                <div className="col-span-2 flex flex-col justify-center">
                    <img src="img/logo.svg" className="invert" />
                </div>
                <div className="col-span-8 flex justify-around">
                    <ul className="text-2xl text-white font-extralight">
                        <li><a className="font-semibold" href="/">Início</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/">Cadastro</a></li>
                        <li><a href="/home">Home</a></li>
                    </ul>
                    <div className="flex justify-center">
                        <img src="img/corallus-logo.png" className="max-w-2/5" alt="Corallus" />
                    </div>
                    <ul className="text-2xl text-white font-extralight">
                        <li><a className="font-semibold" href="">Suporte</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center col-span-2 gap-3">
                    <span className="text-white text-3xl font-semibold">Siga-nos</span>
                    <div className="flex gap-3 text-white text-3xl">
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-twitter-x"></i></a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <span className="text-white text-2xl font-light">&copy; Corallus {dataAtual.getFullYear()}</span>
            </div>
        </section>
    )
}