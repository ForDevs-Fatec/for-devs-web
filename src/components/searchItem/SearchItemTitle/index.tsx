import { TitleItem } from "./styles";

interface SearchItemTitleProps {
    title: string
}

export function SearchItemTitle({title}: SearchItemTitleProps) {
    return (
        <TitleItem>
            {title}
        </TitleItem>
    )
}