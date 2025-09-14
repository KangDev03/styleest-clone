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
      className={`group relative overflow-hidden ${buttonSize} px-8 bg-inverted rounded-full border border-border cursor-pointer ${className}`}
    >
      <div className='relative'>
        <span
          className={`block text-primary text-center font-bold tracking-wider ${textStyle} transform transition-all duration-300 translate-y-0 group-hover:-translate-y-30`}
        >
          {children}
        </span>
        <span
          className={`block text-primary text-center font-bold tracking-wider ${textStyle} absolute -inset-5 transform transition-all duration-300 translate-y-full group-hover:translate-y-0 pt-5`}
        >
          {children}
        </span>
      </div>
    </button>
  )
}
