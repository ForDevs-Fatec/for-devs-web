import { ReactNode } from 'react'
import {InputRootContainer} from './styles'

interface InputRootProps{
    children: ReactNode
}

export function InputRoot({children}: InputRootProps) {
  return (
    <InputRootContainer>
      {children}
    </InputRootContainer>
  )
}
