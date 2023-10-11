import { Search } from "lucide-react";
import { Header } from "../../components/header";
import { SideBarMenu } from "../../components/sideMenu";
import { Input } from "../../components/input";
import { Container, HeaderContainer, MainContainer, MainSectionItems, SearchSectionWrapper, SectionInput, SectionButton, NoDataSection, NoDataTextTitle, NoDataTextSubtitle, ImgData } from "./styles";
import { SearchItem } from "../../components/searchItem";
import apiPln from "../../services/api-pln.service";
import URI from "../../utils/enum/uri.enum";
import { useState } from "react";
import ImgDataSearch from '../../assets/location_search.svg'
import { HeaderComponent } from "@/components/headerComponent";

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
        <Container>
            <HeaderContainer>
                <HeaderComponent />
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

                    <SectionButton onClick={() => searchHandler(text)}>
                      
                    </SectionButton>
                </SearchSectionWrapper>

                <MainSectionItems>
                    {data.length === 0
                    &&
                    <NoDataSection>
                        <ImgData src={ImgDataSearch} alt='no data' />
                        <NoDataTextTitle>Nenhum resultado encontrado</NoDataTextTitle>
                        <NoDataTextSubtitle>Por favor, pesquise por um termo.</NoDataTextSubtitle>
                    </NoDataSection>
                    }
                    {data.map((x  : any) => (
                        <SearchItem.Root>
                            <SearchItem.ItemContent>
                                <SearchItem.ItemTitle title={x.review_title} />
                                <SearchItem.ItemSubTitle subtitle={x.review_text} />
                            </SearchItem.ItemContent>
                        </SearchItem.Root>
                    ))}
                </MainSectionItems>
            </MainContainer>
        </Container>
    )
}