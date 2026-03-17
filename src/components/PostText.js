export default function PostText({ content }) {
    return (
        <div className="border border-stone-300 p-2 rounded-lg">
            {/* FOTO NOME E OPÇÕES */}
            <div className="grid grid-cols-12">
                <a href="" className="cursor-pointer col-span-1">
                    <i className="text-stone-500 text-4xl bi bi-person-circle"></i>
                </a>
                <div className="col-span-10">
                    <h2 className="text-lg">Nome Perfil</h2>
                    <span className="text-stone-500">há 3 dias atrás</span>
                </div>
                <button className="cursor-pointer flex justify-center col-span-1">
                    <i className="bi bi-three-dots"></i>
                </button>
            </div>
            <p className="text-lg">{content}</p>
            <div className="flex gap-7 mt-3">
                <div className=" text-xl flex gap-1">
                    <span>5</span>
                    <button className="cursor-pointer"><i className="bi bi-hand-thumbs-up"></i></button>
                </div>
                <div className="text-xl flex gap-1">
                    <span>1</span>
                    <button className="cursor-pointer"><i className="bi bi-hand-thumbs-down"></i></button>
                </div>
                <div className="text-xl flex gap-1">
                    <span>2</span>
                    <button className="cursor-pointer"><i className="bi bi-chat-left"></i></button>
                </div>
                <div className="text-xl flex gap-1">
                    <button className="cursor-pointer"><i className="bi bi-upload"></i></button>
                </div>

                
            </div>
        </div>
    )
}