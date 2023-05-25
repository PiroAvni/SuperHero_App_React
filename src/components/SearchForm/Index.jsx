import { useState, useEffect, useRef } from "react";
import './style.css'

const SearchForm = ({handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const inputRef = useRef();

    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
      console.log(event.target.value)
    };
  
    function handleSubmit(e) {
      e.preventDefault();
      handleSearch(searchTerm);
      setSearchTerm("");
  }


    useEffect(() => {
        inputRef.current.focus();
      }, []);
  




    return (
      <form onSubmit={handleSubmit}>
        <input
        id="superhero"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          autoComplete="off"
          ref={inputRef}
          onChange={handleInputChange}
        />
        <input className='button' type="submit" value="Search"/>
      </form>
    );
  };
  
  export default SearchForm;