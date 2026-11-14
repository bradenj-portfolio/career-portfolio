import type { ReactNode, MouseEventHandler } from 'react'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}) {
  const variants = {
    primary: 'btn btn-primary',
    outline: 'btn btn-outline',
    ghost: 'link-btn',
  }
  const sizes = { sm: 'text-sm px-3 py-1.5', md: 'text-base px-4 py-2', lg: 'text-lg px-6 py-3' }
  return (
    <button className={`${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
