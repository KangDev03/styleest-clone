import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'small' | 'large';
}

export default function Button({ children, onClick, className, size = 'small' }: ButtonProps) {

  const textStyle =
    size === 'small'
      ? 'text-sm leading-4'
      : 'text-base leading-5';

  const buttonSize =
    size === 'small'
      ? 'py-3.5'
      : 'py-5';

  return (
    <button
      onClick={onClick}
      className={`${buttonSize} px-8 bg-inverted rounded-full border border-border cursor-pointer ${className}`}
    >
      <div>
        <p className={`text-primary text-center font-bold tracking-wider ${textStyle}`}>
          {children}
        </p>
      </div>
    </button>
  )
}
