import { SideBarMenu } from "../sideMenu"
import { useLocation } from "react-router-dom"
import { BarChart3, Users, Search, TrendingUp } from "lucide-react"
import { UserModal } from "../newUserModal"

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
            pageIcon = <BarChart3 className='w-5 h-5 text-zinc-50' />
            break;
        case '/users':
            pageTitle = 'Usuários'
            pageSubtitle = 'Usuários'
            pageIcon = <Users className='w-5 h-5 text-zinc-50' />
            break;
        case '/search':
            pageTitle = 'Pesquisa'
            pageSubtitle = 'Pesquisa'
            pageIcon = <Search className='w-5 h-5 text-zinc-50' />
            break;
        case '/metrics':
            pageTitle = 'Métricas'
            pageSubtitle = 'Métricas'
            pageIcon = <TrendingUp className='w-5 h-5 text-zinc-50' />
            break;
    }

    return (
        <div className='flex items-center gap-8'>
            <SideBarMenu />

            <div className='w-full'>
                {location.pathname === '/users' ?
                    (
                        <div className='flex items-center justify-between'>
                            <div>
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

                            <div>
                                <UserModal />
                            </div>
                        </div>
                    )
                    :
                    (
                        <>
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
                        </>
                    )
                }

            </div>
        </div>
    )
}