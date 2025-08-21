import React from 'react'

interface SectionSubTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionSubTitle({ children, className }: SectionSubTitleProps) {

  return (
    <h1 className={`text-primary font-bold text-5xl leading-17 ${className}`}>
      {children}
    </h1>
  )
}
