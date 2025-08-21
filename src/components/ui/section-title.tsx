import React from 'react'

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className }: SectionTitleProps) {

  return (
    <p className={`text-accent font-bold leading-5 tracking-ultrawide uppercase ${className}`}>
      {children}
    </p>
  )
}
