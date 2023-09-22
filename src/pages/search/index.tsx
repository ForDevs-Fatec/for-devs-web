import { Search } from "lucide-react";
import { Header } from "../../components/header";
import { SideBar } from "../../components/sidebar";
import { Input } from "../../components/input";
import { Container, HeaderContainer, MainContainer, MainSectionItems } from "./styles";
import { SearchItem } from "../../components/searchItem";

export function SearchPage() {
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