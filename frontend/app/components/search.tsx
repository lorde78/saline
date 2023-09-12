import React, { useState } from 'react';

interface SearchResult {
    id: number;
    title: string;
    // Add other properties from your JSON data here
}

interface SearchProps {
    data: SearchResult[];
    onSearch: (results: SearchResult[]) => void;
}

function Search({ data, onSearch }: SearchProps) {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        const results = data.filter(item => {
            const title = item.title.toLowerCase();
            return title.includes(searchQuery.toLowerCase());
        });
        S
        onSearch(results);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Search;
