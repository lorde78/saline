import { Link } from '@remix-run/react';
import SearchInput from '../components/SearchInput';

export default function Search() {
  const handleSearch = (searchText: string) => {
    // Implement your search logic here with the searchText.
    console.log('Searching for:', searchText);
  };

  return (
    <div>
      <h1>Search Example</h1>
      <Link to="/">Home</Link>
      <SearchInput onSearch={handleSearch} />
    </div>
  );
}