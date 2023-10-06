import { Search } from "lucide-react";
import { Header } from "../../components/header";
import { SideBar } from "../../components/sidebar";
import { Input } from "../../components/input";
import { Container, HeaderContainer, MainContainer, MainSectionItems, SearchSectionWrapper, SectionInput, SectionButton } from "./styles";
import { SearchItem } from "../../components/searchItem";
import apiPln from "../../services/api-pln.service";
import URI from "../../utils/enum/uri.enum";
import { useState } from "react";
import { Button } from "../../components/Button";

export function SearchPage() {

    const [data, setData]: any[] = useState([])
    const [text, setText] : any = useState('')

    const searchHandler = async (param: any) => {
        try {
            const response = await apiPln.get(URI.PESQUISA_PLN + '/' + param)
            setData(response.data)
            console.log(data)
        } catch (error) {
            console.error('Error searching:', error)
        }
    }

    return (
        <Container style={{height: data.length >= 8 ? '100%' : '100vh'}}>
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
                <SearchSectionWrapper>
                    <SectionInput>
                        <Input.Root>
                            <Input.IconLeft icon={Search} />
                            <Input.TextField
                                type="text"
                                placeholder="Digite sua pesquisa..."
                                autoComplete="search"
                                onChange={(e) => setText(e.target.value)}
                            />
                        </Input.Root>
                    </SectionInput>

                    <SectionButton
                        onClick={() => searchHandler(text)}>
                            <Button.Root>
                                <Button.Content text="Pesquisar" />
                                <Button.Icon icon={Search} />
                                
                            </Button.Root>
                    </SectionButton>
                </SearchSectionWrapper>

                <MainSectionItems style={{maxWidth: '100%', wordWrap: 'break-word'}}>
                    {data.map((x  : any) => (

                        <SearchItem.Root>
                            <SearchItem.ItemContent>
                                <SearchItem.ItemTitle title={x.review_title} />
                                <SearchItem.ItemSubTitle subtitle={x.review_text} />
                            </SearchItem.ItemContent>
                        </SearchItem.Root>
                    ))}

{/*     
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
                    </SearchItem.Root> */}

                </MainSectionItems>
            </MainContainer>
        </Container>
    )
}