// components/SearchInput.tsx
import React, { useState } from 'react';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleSearchClick = () => {
    onSearch(searchText);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchInput;
