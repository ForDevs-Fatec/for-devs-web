import { Trash, Users } from 'lucide-react'
import { Header } from '../../components/header'
import { SideBar } from '../../components/sidebar'
import { Container, HeaderContainer, MainContainer } from './styles'
import { UserComponent } from '../../components/userComponent'

export function UsersPage() {
    return (
        <Container>
            <HeaderContainer>
                <SideBar />
                <Header.Root>
                    <Header.TitleWrapper>
                        <Header.TitleContent icon={Users} title='Usuários' />
                    </Header.TitleWrapper>
                    <Header.LogoWrapper>
                        <Header.Logo />
                    </Header.LogoWrapper>
                </Header.Root>
            </HeaderContainer>

            <MainContainer>
                <UserComponent.Root>
                    <UserComponent.Content name='joao' email='joao@mail.com' />
                    <UserComponent.SelectRole />
                    <UserComponent.RemoveButton icon={Trash} />
                </UserComponent.Root>
                {/* {users.map(user => {
                    return (
                        <UserComponent.Root>
                            <UserComponent.Content name={user.name} email={user.email} />
                            <UserComponent.SelectRole />
                            <UserComponent.RemoveButton icon={Trash} />
                        </UserComponent.Root>
                    )
                })} */}
            </MainContainer>
        </Container>
    )
}