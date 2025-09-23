import React from 'react'
import { clsx } from 'clsx'

interface SectionSubTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionSubTitle({ children, className }: SectionSubTitleProps) {

  return (
    <h5 className={clsx('mt-3 md:mt-4 lg:mt-6 text-primary text-center font-bold text-2xl md:text-3.5xl lg:text-5xl leading-8.5 md:leading-11 lg:leading-17', className)}>
      {children}
    </h5>
  )
}
