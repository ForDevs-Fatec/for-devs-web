import { Search } from "lucide-react";
import { Header } from "../../components/header";
import { SideBar } from "../../components/sidebar";
import { Input } from "../../components/input";
import { Container, HeaderContainer, MainContainer, MainSectionItems } from "./styles";
import { SearchItem } from "../../components/searchItem";
import apiPln from "../../services/api.service";
import URI from "../../utils/enum/uri.enum";
import { useState } from "react";

export function SearchPage() {

    const [data, setData]: any[] = useState([])

    const searchHandler = async (param: any) => {
        try {
            const response = await apiPln.get(URI.PESQUISA_PLN + '/' + param)
            setData(response.data)
        } catch (error) {
            console.error('Error searching:', error)
        }
    }

    return (
        <Container>
            <HeaderContainer>
                <SideBar />
                <Header.Root>
                    <Header.TitleWrapper>
                        <Header.TitleContent icon={Search} title='Pesquisa' />
                    </Header.TitleWrapper>
                    <Header.LogoWrapper>
                        <Header.Logo />
                    </Header.LogoWrapper>
                </Header.Root>
            </HeaderContainer>

            <MainContainer>
                <Input.Root>
                    <Input.IconLeft icon={Search} />
                    <Input.TextField
                        type="text"
                        placeholder="Pesquisar"
                        autoComplete="search"
                    />
                </Input.Root>

                <MainSectionItems>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                    <SearchItem.Root>
                        <SearchItem.ItemContent>
                            <SearchItem.ItemTitle title='Título' />
                            <SearchItem.ItemSubTitle subtitle='Subtítulo' />
                        </SearchItem.ItemContent>
                    </SearchItem.Root>

                </MainSectionItems>
            </MainContainer>
        </Container>
    )
}