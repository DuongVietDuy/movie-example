import { useState } from "react";
import PropType from "prop-types";

const Header = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-white">Movie</h1>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-3 rounded-md"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
        onClick={() => onSearch(searchTerm)}>
          Search
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropType.func.isRequired,
};

export default Header;
