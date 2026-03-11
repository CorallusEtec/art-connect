import { useEffect, useState } from "react"

export default function SelectUf({ value, setValue }) {
    const [listaEstados, setListaEstados] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(()=>{
        carregarUfs();
    }, [])
    async function carregarUfs() {
        try {
            const dados = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
            const json = await dados.json();
            setListaEstados(json);
        } catch(e) {
            console.error(e);
        } finally {
            setLoad(false);
        }
    }

    if(load) return <select></select>
    return (
        <select value={value} onChange={(e)=>setValue(e.target.value)} className="w-[70%] text-stone-500 border text-xl rounded-lg border-stone-300 p-2 bg-stone-200">
            <option value="">Selecione UF</option>
            {listaEstados.map(uf=> (
                <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
            ))}
        </select>
    )

}