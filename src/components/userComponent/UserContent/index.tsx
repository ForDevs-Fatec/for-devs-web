import {
    Content, 
    ContentName, 
    ContentEmail
} from './styles'

interface UserContentProps {
    name: string,
    email: string
}

export function UserContent({ name, email }: UserContentProps) {
    return (
        <>
            <Content>
                <ContentName>{name}</ContentName>
            </Content>
            <Content>
                <ContentEmail>{email}</ContentEmail>
            </Content>
        </>
    )
}