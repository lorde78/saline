import React, { useState } from 'react';
import '../styles/languageselect.css';

interface Language {
    value: string;
    label: string;
}

const LanguageSelect: React.FC = () => {

    const [selectedLanguage, setselectedLanguage] = useState<Language | null>({
        value: 'FR',
        label: 'France',
    });

    const handleLanguageChange = (language: Language) => {
        setselectedLanguage(language);
        console.log('Selected country:', language.label);
    };

    const languages: Language[] = [
        { value: 'FR', label: 'France' },
        { value: 'UK', label: 'United Kingdom' },
    ];
    return (
            <select
                id="language-select"
                value={selectedLanguage?.value || ''}
                onChange={(e) => {
                    const value = e.target.value;
                    const languageSelected = languages.find((language) => language.value === value);
                    if (languageSelected) {
                        handleLanguageChange(languageSelected);
                    }
                }}
            >
                {languages.map((language) => (
                    <option key={language.value} value={language.value}>
                        {language.label
                        }
                    </option>
                ))}
            </select>
    );
};

export default LanguageSelect;
