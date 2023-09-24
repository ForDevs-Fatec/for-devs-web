import { ElementType } from 'react'

interface InputIconRightProps {
  icon: ElementType
}

export function InputIconRight({icon: Icon}: InputIconRightProps) {
  return (
    <Icon 
      size={24}
      color='#7c7c8a'
    />
  )
}
