import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:shadow-primary/30 focus:ring-primary dark:bg-white dark:text-black dark:hover:bg-gray-100 dark:hover:shadow-white/10",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary dark:border-white/20 dark:text-white dark:hover:bg-white/10",
    ghost: "bg-transparent text-slate-600 hover:text-primary hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
  };

  // Override primary for specific "Talk to us" gradient feel if needed in parents, 
  // but keep consistent base here.

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};