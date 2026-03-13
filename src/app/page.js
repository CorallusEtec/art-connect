import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-teal-700 flex flex-col gap-3">
        <div className="flex flex-col items-center">
          <img src="img/logo.svg" className="invert max-w-1/6" />
          <span className="text-white font-light text-3xl">"Conectando talentos à oportunidades reais"</span>
        </div>
        <div className="flex justify-center">
          {/* TEXTO */}
          <div className="flex flex-col col-span-8 items-center justify-center text-white">
            <h2 className="text-2xl font-medium">O que é o Art Connect?</h2>
            <p className="w-[65%] text-center text-xl font-light">
              O Art Connect é uma plataforma própria para a criação e divulgação de portfólios e trabalhos 
              artísticos. A proposta é realizar uma ponte entre artistas que merecem ter a sua arte exposta e 
              estabelecimentos que buscam talentos para seu espaço
            </p>
          </div>
          
        </div>
        <div className="flex justify-center col-span-4 p-5 gap-10">
            <a href="/cadastro/artista" className="w-44 h-44 bg-white rounded-xl items-center justify-around flex flex-col">
              <i className="text-5xl bi bi-music-note-beamed"></i>
              <div className="flex flex-col text-2xl items-center">
                <span className="font-extralight">É um artista?</span>
                <span className="font-light">Crie um conta</span>
              </div>
            </a>
            <a href="/cadastro/parceiros" className="w-44 h-44 bg-white rounded-xl items-center justify-around flex flex-col">
              <i className="text-5xl bi bi-briefcase"></i>
              <div className="flex flex-col text-xl items-center">
                <span className="text-center font-extralight">É um estabelecimento?</span>
                <span className="font-light">Crie um conta</span>
              </div>
            </a>
          </div>
      </section>
      <section className="p-3">
        <div className="flex items-center gap-3 justify-center text-4xl mb-5">
          <i className="bi bi-camera-reels"></i>
          <h2 className="font-light">Video Pitch do Projeto</h2>
        </div>
        <div className="flex justify-center">
          <iframe className="rounded-2xl" width="1280" height="723" src="https://www.youtube.com/embed/GlMpDZhPY88?si=HZ9idjrF0CRcEsYw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}
