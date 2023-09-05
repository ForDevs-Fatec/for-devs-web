import { ElementType } from 'react'

interface InputIconLeftProps {
  icon: ElementType
}

export function InputIconLeft({icon: Icon}: InputIconLeftProps) {
  return (
    <Icon
      size={24}
      color='#7c7c8a'
    />
  )
}
