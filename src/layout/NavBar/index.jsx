
import { SearchForm } from '../../components'
import './style.css'

const Navbar = () => {

    const handleSearch = (searchTerm) => {
      
      console.log('Searching for:', searchTerm);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="" alt="Logo" />
        </div>
        <div className="navbar-search">
          <SearchForm onSearch={handleSearch} />
        </div>
      </nav>
    );
  };
  
  export default Navbar;