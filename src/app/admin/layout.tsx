import NavbarAdmin from "@/components/NavbarAdmin"

export default function Layout({ children }) {
    return (
        <div className="">
        <NavbarAdmin />
        {children}
        </div>
        
    )
}