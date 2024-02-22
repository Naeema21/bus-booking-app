"use client"

import React from 'react';
import { useState , useEffect } from 'react';
import { MdCalendarMonth } from 'react-icons/md';

const CalendarInput: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
        const day = today.getDate().toString().padStart(2, '0');
    
        const formattedDate = `${year}-${month}-${day}`;
        setInputValue(formattedDate);
      }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0  pl-1 flex items-center pointer-events-none">
                <MdCalendarMonth />
            </div>
            <input
                type="date"
                value={inputValue}
                onChange={handleChange}
                className="pl-12 pr-4 w-full py-2 px-4 border-b-[1px] text-gray border-gray-300 shadow-sm focus:border-blue-500 outline-none"
                placeholder="Select date..."
            />
        </div>
    );
};

export default CalendarInput;
