import React from 'react';
import { motion as Motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg disabled:hover:bg-primary-600 disabled:hover:shadow-md',
        secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:hover:bg-gray-100',
        outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 disabled:hover:bg-transparent',
        success: 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg disabled:hover:bg-green-600 disabled:hover:shadow-md',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg',
    };

    const motionStates = props.disabled ? {} : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

    return (
        <Motion.button
            {...motionStates}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </Motion.button>
    );
};

export default Button;
