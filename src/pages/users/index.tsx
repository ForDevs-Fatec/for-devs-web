import { HeaderComponent } from '@/components/headerComponent'
import { UserTable } from '@/components/usersTable'

export function UsersPage() {
    return (
        <div className='p-4 h-screen w-full'>
            <HeaderComponent />
            <div className="flex justify-center items-center p-5">
                <div className='w-[71.875rem] pt-6'>
                    <UserTable />
                </div>
            </div>
        </div>
    )
}