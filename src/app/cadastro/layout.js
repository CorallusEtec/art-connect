import Navbar from "@/components/Navbar"
export default function CadastroLayout({ children }) {
    return (
        <>
        <Navbar />
        {children}
        </>
    )
}