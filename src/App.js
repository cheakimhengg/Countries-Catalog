import { useEffect, useState } from "react";
import { fetchCountries } from "./services/countriesService";
import { Search } from "lucide-react";
import Footer from "./components/Footer";
import CountryCard from "./components/CountryCard";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isAscending, setIsAscending] = useState(true); // Default sorting order

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

  return (
    <div className="w-full bg-gray-100 flex justify-center">
      <div className="max-w-7xl w-[90%] flex flex-col items-center">
        <div className="w-full flex flex-row">
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
              className="p-2 border border-gray-300 rounded-xl bg-[#6466ef] text-white "
            >
              {isAscending ? "Descending" : "Ascending"}
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
            {filteredCountries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
