import type { ReactNode } from 'react'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}

export function CardBody({ children }: { children: ReactNode }) {
  return <div className="card-body">{children}</div>
}

export function CardHead({ children }: { children: ReactNode }) {
  return (
    <div className="card-head">
      <div className="card-title">{children}</div>
    </div>
  )
}

export function CardFoot({ children }: { children: ReactNode }) {
  return <div className="card-foot">{children}</div>
}
