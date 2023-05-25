
import { SearchForm } from '../../components'
import logo from '../../../public/images/logo (3).png'
import './style.css'

const Navbar = () => {

    const handleSearch = (searchTerm) => {
      
      console.log('Searching for:', searchTerm);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-search">
          <SearchForm onSearch={handleSearch} />
        </div>
      </nav>
    );
  };
  
  export default Navbar;