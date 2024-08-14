import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import { fetchCountries } from "./services/countriesService";
import Footer from "./components/Footer";
import CountryCard from "./components/CountryCard";
import CountryModal from "./components/CountryModal";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isAscending, setIsAscending] = useState(true); // Default sorting order
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [countriesPerPage] = useState(36); // Number of countries per page
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch data from API
  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    getCountries();
  }, []);

  // Handle search and sorting
  useEffect(() => {
    setCurrentPage(1);
    const results = countries
      .filter((country) =>
        country.name.official
          .toLowerCase()
          .includes(searchCountry.toLowerCase())
      )
      .sort((a, b) => {
        if (isAscending) {
          return a.name.official.localeCompare(b.name.official);
        } else {
          return b.name.official.localeCompare(a.name.official);
        }
      });

    setFilteredCountries(results);
  }, [searchCountry, countries, isAscending]);

  // Toggle sorting order
  const handleSortToggle = () => {
    setIsAscending(!isAscending);
  };

  // Calculate current countries to display
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // Handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle opening the modal with the selected country
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCountry(null);
  };

  return (
    <div className="w-full bg-gray-100 flex justify-center">
      <div className="max-w-7xl w-[90%]  flex flex-col items-center">
        <div className="w-full flex flex-row sticky ">
          <div className="md:w-[85%] w-[75%] my-14 relative">
            <input
              className="w-full p-2 pl-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6466ef]"
              type="text"
              placeholder="Search for a country..."
              value={searchCountry}
              onChange={(e) => setSearchCountry(e.target.value)}
            />
            <Search
              size="24"
              className="mr-2 absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6466ef] cursor-pointer"
            />
          </div>
          <div className="my-14 ml-auto">
            <button
              onClick={handleSortToggle}
              className="py-2 md:px-4  px-2 ml-1 rounded-lg bg-[#6466ef] text-white "
            >
              {isAscending ? "Descending" : "Ascending"}
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-10 gap-6">
            {currentCountries.map((country) => (
              <CountryCard
                key={country.cca3}
                country={country}
                onClick={() => handleCountryClick(country)}
              />
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="mt-16">
          <ul className="flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 border rounded-lg ${
                    currentPage === index + 1
                      ? "bg-[#6466ef] text-white "
                      : "bg-white text-black"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Footer />

        {/* Render the Modal */}
        {isModalOpen && (
          <CountryModal country={selectedCountry} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}

export default App;
