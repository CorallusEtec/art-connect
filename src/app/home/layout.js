import NavbarHome from "@/components/NavbarHome";

export default function Layout({ children }) {
    return (
        <>
        <NavbarHome />
        {children}
        </>
        
    )
}