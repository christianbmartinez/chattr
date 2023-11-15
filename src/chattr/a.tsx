import React from 'react'

interface AProps extends React.HTMLProps<HTMLAnchorElement> {
  className?: string
  children: React.ReactNode
}

export default function a({
  className = 'cursor-pointer text-zinc-800 hover:opacity-80 dark:text-zinc-100 hover:dark:opacity-80',
  children,
  ...props
}: AProps) {
  return (
    <a
      className={className}
      {...props}>
      {children}
    </a>
  )
}
