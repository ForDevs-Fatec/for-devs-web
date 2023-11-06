import { HeaderComponent } from '@/components/headerComponent'
import { UserTable } from '@/components/usersTable'

export function UsersPage() {
    return (
        <div className='p-4 h-screen w-full'>
            <HeaderComponent />
            <div className='py-8 px-12'>
                <UserTable />
            </div>
        </div>
    )
}