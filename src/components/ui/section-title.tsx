import React from 'react'
import { clsx } from 'clsx'

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className }: SectionTitleProps) {

  return (
    <h3 className={clsx('font-plus-jakarta-sans text-accent font-bold leading-5 tracking-ultrawide uppercase', className)}>
      {children}
    </h3>
  )
}
