import { useState } from 'react'

export const useDex = () => {
  const [isSelected, setIsSelected] = useState<string>('')

  return {
    isSelected,
    setIsSelected,
  }
}
