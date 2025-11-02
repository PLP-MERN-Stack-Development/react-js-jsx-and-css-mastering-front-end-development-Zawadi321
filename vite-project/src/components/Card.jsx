import React, { useState, useEffect } from 'react';


// MAIN CARD COMPONENT
export default function Card({
  children,
  variant = 'default',
  hoverable = false,
  padding = 'md',
  shadow = 'md',
  border = true,
  rounded = 'md',
  className = '',
}) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    console.log('Card mounted');
    return () => {
      console.log('Card unmounted');
    };
  }, []);

  // Class mappings
   const baseClasses = 'card';
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  }[padding];

  const roundedClasses = {
    none: '',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  }[rounded];

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }[shadow];

  const variantClasses = {
    default: '',
    success: 'border-green-500 bg-green-50 dark:bg-green-900/20',
    danger: 'border-red-500 bg-red-50 dark:bg-red-900/20',
    warning: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
    selected: 'ring-2 ring-blue-500',
  }[variant];

  const borderClass = border ? 'border border-gray-200 dark:border-gray-700' : '';
  const hoverClass = hoverable && isHovered ? 'shadow-lg -translate-y-0.5' : '';


  const allClasses = [
    baseClasses,
    paddingClasses,
    roundedClasses,
    shadowClasses,
    variantClasses,
    borderClass,
    hoverClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={allClasses}
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
    >
      {children}
    </div>
  );
}
// CARD.TITLE SUBCOMPONENT
Card.Title = function CardTitle({ children, className = '' }) {
  return (
    <h3
      className={`text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3 mb-3 ${className}`}
    >
      {children}
    </h3>
  );
};
// CARD.CONTENT SUBCOMPONENT
Card.Content = function CardContent({ children, className = '' }) {
  return (
    <div className={`text-gray-700 dark:text-gray-300 ${className}`}>
        {children}
    </div>
    );
};