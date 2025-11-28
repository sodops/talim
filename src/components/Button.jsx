import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center';

    const variants = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg',
        secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
        success: 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
