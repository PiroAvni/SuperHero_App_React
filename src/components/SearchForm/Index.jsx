import { useState, useEffect, useRef } from "react";


const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef();

    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      
      
    };

    useEffect(() => {
        inputRef.current.focus();
      }, []);
  
    return (
      <div>
        <input
        id="superhero"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          autoComplete="off"
          ref={inputRef}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
  export default SearchForm;