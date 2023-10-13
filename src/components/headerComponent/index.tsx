import { SideBarMenu } from "../sideMenu"
import { useLocation } from "react-router-dom"
import { BarChart3, Users, Search } from "lucide-react"

export function HeaderComponent() {
    const location = useLocation()
    const path = location.pathname

    let pageTitle
    let pageSubtitle
    let pageIcon

    switch (path) {
        case '/dashboard':
            pageTitle = 'Dashboard'
            pageSubtitle = 'Dashboard'
            pageIcon = <BarChart3 className='w-5 h-5 text-zinc-50'/>
            break;
        case '/users':
            pageTitle = 'Usuários'
            pageSubtitle = 'Usuários'
            pageIcon = <Users className='w-5 h-5 text-zinc-50'/>
            break;
        case '/search':
            pageTitle = 'Pesquisa'
            pageSubtitle = 'Pesquisa'
            pageIcon = <Search className='w-5 h-5 text-zinc-50'/>
            break;
    }

    return (
        <div className='flex items-center gap-8'>
            <SideBarMenu />
            <div className='flex flex-col gap-2'>
                <div>
                    <span className='text-zinc-500 text-sm'>
                        Pages / 
                        <span className='text-zinc-50 ml-1'>
                            {pageSubtitle}
                        </span>
                    </span>
                </div>
                <div className='flex gap-2 items-center'>
                    {pageIcon}
                    <h1 className='font-bold text-lg text-zinc-50'>{pageTitle}</h1>
                </div>
            </div>
        </div>
    )
}