import { useState, useEffect, useRef } from "react";

const SearchBar = ({ onSearch, fruits }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const handleFocus = () => {
    setOpen(true);
  };

  const onKeyPress = (e) => {
    if (searchTerm !== "" && e.key === "Enter") {
      if (
        fruits.find(
          (fruit) => fruit.name.toLowerCase() === searchTerm.toLowerCase()
        )
      ) {
        onSearch(searchTerm);

        setSearchTerm("");

        // Hide List
        setOpen(false);
      }
    }
  };

  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative flex items-center px-4 justify-center">
      <div className="relative mr-3 ">
        <div className="absolute top-3 left-3 items-center">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          className="outline-none block p-2 pl-10 w-[450px] text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
          placeholder="Search fruits ..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setOpen(true);
          }}
          onKeyPress={onKeyPress}
          onFocus={handleFocus}
        />
      </div>

      {/* Expand List */}
      <div
        className={`${open ? "block" : "hidden"}
                z-10 overflow-scroll absolute top-12 w-[440px] -ml-2 rounded-lg max-h-[250px] bg-white`}
      >
        <ul>
          {filteredFruits.map((fruit) => (
            <li
              key={fruit.id}
              className="w-full bg-transparent hover:bg-gray-50 text-gray-800 hover:text-gray-700 py-2 px-4 border-b border-gray-100"
            >
              <button
                className="w-full"
                onClick={() => {
                  setSearchTerm(fruit.name);
                  onSearch(fruit.name);

                  setSearchTerm("");

                  // Hide the list
                  setOpen(false);
                }}
              >
                {fruit.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { SearchBar };
