import { SideBarMenu } from "../sideMenu"
import { useLocation } from "react-router-dom"

interface HeaderComponentProps {
    title: string
    subtitle: string
}

export function HeaderComponent() {
    const location = useLocation()
    const path = location.pathname

    let pageTitle
    let pageSubtitle

    switch (path) {
        case '/dashboard':
            pageTitle = 'Dashboard'
            pageSubtitle = 'Dashboard'
            break;
        case '/users':
            pageTitle = 'Usuários'
            pageSubtitle = 'Usuários'
            break;
        case '/search':
            pageTitle = 'Pesquisa'
            pageSubtitle = 'Pesquisa'
            break;
    }

    return (
        <div className='flex items-center gap-8'>
            <SideBarMenu />
            <div>
                <div>
                    <span className='text-zinc-500 text-sm'>
                        Pages / 
                        <span className='text-zinc-50 ml-1'>
                            {pageSubtitle}
                        </span>
                    </span>
                </div>
                <div>
                    <h1 className='font-bold text-lg text-blue-500'>{pageTitle}</h1>
                </div>
            </div>
        </div>
    )
}