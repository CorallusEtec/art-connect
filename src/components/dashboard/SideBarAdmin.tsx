import { SideBarItem } from "./SideBarItem"

export type SideBarAdminProps = {
    showMenu: boolean,
}

export function SideBarAdmin(props: SideBarAdminProps) {
    
    
    return (
        <div className={`bg-azul-600 h-full absolute ease-in-out duration-500 ${props.showMenu?"translate-x-0":"-translate-x-full"}`}>
                <ul className="text-white flex flex-col gap-2 text-lg">
                    <li>
                        <SideBarItem href="/dashboard" title="Dashboard">
                            <i className="bi bi-stack"></i>
                        </SideBarItem>
                    </li>
                    <li>
                        <SideBarItem href="/dashboard/usuarios" title="Usuários">
                            <i className="bi bi-people-fill"></i>
                        </SideBarItem>
                    </li>
                    <li>
                        <SideBarItem href="/dashboard/contratantes" title="Contratantes">
                            <i className="bi bi-briefcase-fill"></i>
                        </SideBarItem>
                    </li>
                </ul>
            </div>
    )
}