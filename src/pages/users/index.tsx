import { Trash, Users } from 'lucide-react'
import { Header } from '../../components/header'
import { SideBar } from '../../components/sidebar'
import { Container, HeaderContainer, MainContainer } from './styles'
import { UserComponent } from '../../components/userComponent'
import { useEffect, useState } from 'react'
import api from '../../services/api.service'
import URI from '../../utils/enum/uri.enum'
import { toast } from 'react-toastify';

interface UserData {
    id: number;
    name: string;
    email: string;
    role: number;
}

const mapRoleToLabel = (role: number): string => {
    switch (role) {
        case 0:
            return 'Administrador';
        case 1:
            return 'Nível 1';
        case 2:
            return 'Nível 2';
        default:
            return 'Desconhecido';
    }
};

export function UsersPage() {
    const [users, setUsers] = useState<UserData[] | null>([]);

    const errorToast = () => toast.error("Erro ao excluir usuário!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const success = () => toast.success("Usuário excluído com sucesso!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get<UserData[]>(URI.USER);
                setUsers(response.data);  // Usando uma função para garantir a tipagem correta
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

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
                {users?.map((user: UserData) => {
                    return (
                        <UserComponent.Root key={user.id}>
                            <UserComponent.Content name={user.name} email={user.email} />
                            <UserComponent.SelectRole
                                roleOptions={[
                                    { value: 'admin', label: 'Administrador' },
                                    { value: 'nivel1', label: 'Nivel 1' },
                                    { value: 'nivel2', label: 'Nivel 2' }
                                ]}
                                placeholder={mapRoleToLabel(user.role)}
                            />
                            <UserComponent.RemoveButton
                                icon={Trash}
                            />
                        </UserComponent.Root>
                    )
                })}
            </MainContainer>
        </Container>
    )
}