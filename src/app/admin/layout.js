import NavbarAdmin from "@/components/NavbarAdmin"

export default function Layout({ children }) {
    return (
        <div className="h-dvh">
        <NavbarAdmin />
        {children}
        </div>
        
    )
}