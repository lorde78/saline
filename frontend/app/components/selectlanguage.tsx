import React, { useState } from 'react';
import '../styles/selectlanguage.css';

interface Language {
    value: string;
    label: string;
}

const LanguageSelect: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setselectedLanguage] = useState<Language | null>({
        value: 'FR',
        label: 'France',
    });
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option: Language) => {
        setselectedLanguage(option);
        setIsOpen(false);
    };

    const languages: Language[] = [
        { value: 'FR', label: 'Français' },
        { value: 'EN', label: 'English' },
    ];
    return (
        <div className="custom-select-container">
            <div className={`custom-select ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                <div className="selected-option">{selectedLanguage ? selectedLanguage.label : 'Select a country'}</div>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.280339 1.14669C-0.0125541 1.43959 -0.0125545 1.91446 0.280339 2.20735L3.59596 5.51973C4.37712 6.30013 5.64291 6.29982 6.42369 5.51904L9.73808 2.20465C10.031 1.91175 10.031 1.43688 9.73808 1.14399C9.44519 0.851092 8.97032 0.851094 8.67742 1.14399L5.71496 4.10645C5.32444 4.49697 4.69127 4.49697 4.30075 4.10644L1.341 1.14669C1.04811 0.853801 0.573232 0.853801 0.280339 1.14669Z" fill="#121525" />
                </svg>
            </div>
            {isOpen && (
                <ul className="options">
                    {languages.map((language) => (
                        <li key={language.value} className="option" onClick={() => selectOption(language)}>
                            {language.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSelect;
