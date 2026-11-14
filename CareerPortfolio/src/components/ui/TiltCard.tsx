import { useEffect, useRef, useState } from 'react'

export function TiltCard({
  children,
  className = '',
  maxTilt = 6,
}: {
  children: React.ReactNode
  className?: string
  maxTilt?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * (maxTilt / 2)
      const rotateY = -((x - centerX) / centerX) * (maxTilt / 2)
      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformOrigin: 'center',
      })
    }
    el.addEventListener('mousemove', handle, { passive: true })
    el.addEventListener('mouseleave', () => {
      setStyle({ transform: 'perspective(1000px) rotateX(0) rotateY(0)' })
    })
    return () => el.removeEventListener('mousemove', handle)
  }, [maxTilt])

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{
        transition: 'transform 0.25s cubic-bezier(0.23, 1, 0.32, 1)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
