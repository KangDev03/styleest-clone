import React from 'react'

interface LinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Link({ children, onClick, className }: LinkProps) {

  return (
    <div
      onClick={onClick}
      className={`pb-1 border-b border-primary w-fit cursor-pointer ${className}`}>
      <p className="text-primary text-base font-bold text-center leading-5 tracking-wider md:tracking-normal lg:tracking-wider">
        {children}
      </p>
    </div>
  )
}
