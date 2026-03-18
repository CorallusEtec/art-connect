export default function AdminUsuarios() {
    return (
        <div className="flex flex-col h-dvh">
            {/* CONTROLES DE BUSCA */}
            <div className="flex flex-col gap-10">
                {/* REGISTRO NUMEROS */}
                <div className="flex flex-col items-center p-3 gap-2">
                    <h1 className="text-4xl">Contas Cadastradas</h1>
                    <h2 className="text-xl font-light">Total de registros encontrados: 20</h2>
                </div>
                {/* CONTROLES */}
                <div className="flex flex-col items-center gap-5">
                    {/* INPUT COM FILTRO */}
                    <div className="flex gap-2">
                        <input className="text-xl p-2 outline-none border-b-2 border-b-stone-200"
                        type="text" placeholder="Pesquise por conta"
                        />
                        <button className="cursor-pointer text-stone-800 hover:bg-stone-200 p-2
                        flex items-center gap-2 rounded-lg bg-stone-100 border-stone-300 border">
                            <i className="bi bi-filter"></i>
                            <span>Filtrar</span>
                        </button>
                    </div>
                    <button className="cursor-pointer
                    hover:bg-emerald-500 bg-emerald-600
                    p-2 w-[15%] rounded-xl border border-emerald-700 text-xl text-white"
                    >Buscar</button>
                </div>
            </div>
            {/* TABELA */}
            <div className="grid grid-cols-12">
                <div className="col-start-2 flex flex-col col-span-10 p-3 border bg-stone-100 border-stone-300 rounded-lg">
                    <h2 className="text-2xl text-stone-800">Usuários cadastrados</h2>
                    <table className="border-collapse table-fixed">
                        <thead className="border-b border-b-stone-300">
                            <tr>
                                <th>Tipo Usuário</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Localidade</th>
                                <th>Status da conta</th>
                                <th >Editar conta</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td>Oi</td>
                            </tr>
                            <tr>
                                <td>Oi</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}