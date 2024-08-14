import React, { useEffect } from "react";

function CountryModal({ country, onClose }) {
  useEffect(() => {
    if (country) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.width = `calc(100% - ${scrollbarWidth}px)`;
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.width = "";
    };
  }, [country]);

  if (!country) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-10 rounded-lg w-[38.5rem] md:mr-4 md:ml-0 mr-10 ml-6 max-h-[90vh] overflow-y-auto">
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-8">
          <img
            src={country?.flags?.png || "/default-flag.png"}
            alt={`${country?.name?.official || "Unknown"} flag`}
            width="100%"
            className="w-52 h-32 object-fill select-none"
          />
          <h2 className="text-xl font-bold">
            {country?.name?.official || "Unknown Country"}
          </h2>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-row text-base">
            <p className="font-semibold">Alternative:</p>
            <p className="pl-1 text-gray-600">
              {country?.altSpellings.join(", ") || "N/A"}
            </p>
          </div>
          <div className="flex flex-row text-base">
            <p className="font-semibold">Capital:</p>
            <p className="pl-1 text-gray-600">{country?.capital || "N/A"}</p>
          </div>
          <div className="flex flex-row text-base">
            <p className="font-semibold">Region:</p>
            <p className="pl-1 text-gray-600">{country?.region || "N/A"}</p>
          </div>
          <div className="flex flex-row text-base">
            <p className="font-semibold">Population:</p>
            <p className="pl-1 text-gray-600">
              {country?.population
                ? country.population.toLocaleString()
                : "N/A"}
            </p>
          </div>
          <div className="flex flex-row text-base">
            <p className="font-semibold">Area:</p>
            <p className="pl-1 text-gray-600">
              {country?.area ? `${country.area.toLocaleString()} km²` : "N/A"}
            </p>
          </div>
          <div className="flex flex-row text-base">
            <p className="font-semibold">Currencies:</p>
            <p className="pl-1 text-gray-600">
              {country?.currencies
                ? Object.entries(country.currencies)
                    .map(([code]) => `${code}`)
                    .join(", ")
                : "N/A"}
            </p>
          </div>
          <div className="flex flex-row text-base">
            <p className="font-semibold">Country Code:</p>
            <p className="pl-1 text-gray-600">
              {country?.cca2 ? country.cca2 : "N/A"},
              {country?.cca3 ? country.cca3 : "N/A"},
              {country?.ccn3 ? country.ccn3 : "N/A"},
              {country?.cioc ? country.cioc : "N/A"}
            </p>
          </div>{" "}
          <div className="flex flex-row text-base">
            <p className="font-semibold">Languages:</p>
            <p className="pl-1 text-gray-600">
              {country?.languages
                ? Object.values(country.languages).join(", ")
                : "N/A"}
            </p>
          </div>
          <div className="flex flex-row text-base">
            <p className="font-semibold">Borders:</p>
            <p className="pl-1 text-gray-600">
              {country?.borders ? country.borders.join(", ") : "N/A"},
            </p>
          </div>
          <div className="flex flex-row text-base ">
            <p className="font-semibold whitespace-nowrap">Calling Codes:</p>
            <p className="pl-1 text-gray-600">
              {country.idd.root}
              {country.idd.suffixes && country.idd.suffixes.length > 0
                ? country.idd.suffixes.join(", ")
                : ""}
            </p>
          </div>
          <div className="flex flex-row text-base">
            <p className="font-semibold">Timezones:</p>
            <p className="pl-1 text-gray-600">
              {country?.timezones ? country.timezones.join(", ") : "N/A"}
            </p>
          </div>
          <div className="flex flex-row text-base">
            <p className="font-semibold whitespace-nowrap">Google Maps:</p>
            <a
              href={country?.maps.googleMaps || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="pl-1 text-[#6466ef] underline"
            >
              {country?.maps.googleMaps ? country.maps.googleMaps : "N/A"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryModal;
