import React from 'react'
import { clsx } from 'clsx'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'small' | 'large';
  animated?: boolean;
}

export default function Button({ children, onClick, className, size = 'small', animated = true }: ButtonProps) {

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
      type='button'
      onClick={onClick}
      className={clsx(
        'group relative overflow-hidden px-8 bg-inverted rounded-full border border-border cursor-pointer',
        buttonSize,
        className
      )}
    >
      <div className='relative'>
        <p
          className={clsx(
            'block text-primary text-center font-bold tracking-wider',
            textStyle,
            animated && 'transform transition-all duration-300 translate-y-0 group-hover:-translate-y-30'
          )}
        >
          {children}
        </p>
        {animated && (
          <p
            className={clsx('text-primary text-center font-bold tracking-wider absolute -inset-5 transform transition-all duration-300 translate-y-full group-hover:translate-y-0 pt-5',
              textStyle
            )}
          >
            {children}
          </p>
        )}
      </div>
    </button>
  )
}
