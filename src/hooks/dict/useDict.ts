import { useState } from 'react'

export const useDict = () => {
  const [isSelected, setIsSelected] = useState<string>('')

  return {
    isSelected,
    setIsSelected,
  }
}
