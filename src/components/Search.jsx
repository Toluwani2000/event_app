import {useState} from 'react'

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    }

    return (
        <div>
            <input type='text' value={searchQuery} placeholder='search...' onChange={(e) => setSearchQuery(e.target.value)}/>
            <button onClick={handleSearch}></button>
        </div>
    );
};

export default SearchBar;