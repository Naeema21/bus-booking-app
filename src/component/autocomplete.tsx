"use client"
import React, { useState } from 'react';
import { IconContext, IconType } from 'react-icons';
import { MdBusAlert, MdOutlineBusAlert } from 'react-icons/md';

interface AutocompleteInputProps {
    name: string;
    // icon?: IconType;
}

const fetchedSuggestions = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
];

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({ name }) => {
    // const { name } = props
    const [inputValue, setInputValue] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        // Filter suggestions based on the input value
        const filteredSuggestions = fetchedSuggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(value.toLowerCase())
        );

        // Update the suggestions state
        setSuggestions(filteredSuggestions);
    };

    // Function to handle suggestion selection
    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0  pl-1 flex items-center pointer-events-none">
                <IconContext.Provider value={{ className: "h-5 w-5 text-[#00adb5]" }} ><MdOutlineBusAlert /> </IconContext.Provider>
            </div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="pl-12 pr-4 w-full py-2 px-4 border-b-[1px] border-gray-300 shadow-sm focus:border-blue-500 outline-none"
                placeholder={name?.toUpperCase()}
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutocompleteInput;
