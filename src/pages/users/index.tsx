import { HeaderComponent } from '@/components/headerComponent'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
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