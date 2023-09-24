import { SubTitleItem } from './styles'

interface SearchItemSubTitleProps {
    subtitle: string
}

export function SearchItemSubTitle({subtitle}: SearchItemSubTitleProps) {
    return (
        <SubTitleItem>
            {subtitle}
        </SubTitleItem>
    )
}