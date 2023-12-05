import React from 'react'

/**
 * Returns a stateful value, and a toggle function to update it.
 * @default false
 */

export default function useChattr(): {
  isOpen: boolean
  toggle: () => void
} {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = React.useCallback(() => {
    setIsOpen(prev => !prev)
  }, [isOpen])

  return {
    isOpen,
    toggle,
  }
}