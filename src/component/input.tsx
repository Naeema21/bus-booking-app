import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    Icon: React.ElementType
}

const Input: React.FC<InputProps> = ({ label, error, Icon, ...rest }) => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0  pl-1 flex items-center pointer-events-none">
                <Icon />
            </div>
            <input
                {...rest}
                className="pl-12 pr-4 w-full py-3 px-4 border-b-[1px] text-gray border-gray-300 shadow-sm focus:border-blue-500 outline-none"
                placeholder={label}
            />
        </div>
    );
};

export default Input;
