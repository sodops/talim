import React from 'react';

const Badge = ({ children, variant = 'primary', className = '' }) => {
    const variants = {
        primary: 'bg-primary-100 text-primary-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        gray: 'bg-gray-100 text-gray-800',
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
