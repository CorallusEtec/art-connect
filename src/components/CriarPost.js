export default function CriarPost() {
    return (
        <div className="flex flex-col border border-stone-200 rounded-lg p-2 ">
            <div className="flex gap-2 pr-7">
                <a href="" className="cursor-pointer">
                    <i className="text-stone-500 text-4xl bi bi-person-circle"></i>
                </a>
                <div className="flex flex-col w-full gap-3">
                    <textarea placeholder="Escreva algo para compartilhar..."
                    className="min-h-36 p-1.5 text-lg font-medium bg-stone-100 border rounded-lg border-stone-300 w-full outline-none"
                    maxLength="500"></textarea>
                    <button className="cursor-pointer p-1 rounded-lg border-emerald-600 bg-emerald-500 text-xl text-white">Enviar</button>
                </div>
                
            </div>
            
            <div className="grid grid-cols-12 py-5">
                <button className="cursor-pointer flex justify-center col-span-4 gap-2 text-stone-500">
                    <i className="bi bi-image"></i>
                    <span>Anexar imagem</span>
                </button>
                <button className="cursor-pointer flex justify-center col-span-4 gap-2 text-stone-500">
                    <i className="bi bi-camera-video"></i>
                    <span>Anexar vídeo</span>
                </button>
                <button className="cursor-pointer flex justify-center col-span-4 gap-2 text-stone-500">
                    <i className="bi bi-music-note"></i>
                    <span>Anexar áudio</span>
                </button>
                
            </div>
        </div>
    )
}