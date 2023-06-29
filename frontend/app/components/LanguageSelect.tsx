import React, { useState } from 'react';

interface Option {
    value: string;
    label: string;
}

const LanguageSelect: React.FC = () => {
    const [selectedLanguage, setselectedLanguage] = useState<Option | null>({
        value: 'FR',
        label: 'France',
      });

    //   const [selectedOption, setSelectedOption] = useState<Option | null>({
    //     value: 'FR',
    //     label: 'France',
    //   });

    const handleLanguageChange = (option: Option) => {
        setselectedLanguage(option);
        console.log('Selected country:', option.label);
    };

    const options: Option[] = [
        { value: 'FR', label: 'France' },
        { value: 'UK', label: 'United Kingdom' },
    ];

    return (
        <div>
            <select
                id="custom-select"
                value={selectedLanguage?.value || ''}
                onChange={(e) => {
                    const value = e.target.value;
                    const selected = options.find((option) => option.value === value);
                    if (selected) {
                        handleLanguageChange(selected);
                    }
                }}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelect;
