import React from "react";
import { MoveRight } from "lucide-react";

function CountryCard({ country, onClick }) {
  return (
    <div
      key={country.cca3}
      onClick={onClick}
      className="w-full flex flex-col bg-white rounded-md shadow-md cursor-pointer"
    >
      <div className="border-b border-gray-200">
        <img
          src={country.flags.png}
          alt={`${country.name.official} flag`}
          width="100%"
          className="w-full rounded-t-md sm:h-40 h-28 object-fill"
        />
      </div>
      <div className="flex flex-col sm:p-4 p-2.5 flex-grow">
        <h3 className="font-bold my-2 text-lg ">{country.name.official}</h3>
        <div className="flex flex-row text-sm">
          <p className="font-semibold text-gray-800  whitespace-nowrap">
            Country Code:
          </p>
          <p className="pl-1 text-gray-500 truncate">
            {country.cca2}, {country.cca3}
          </p>
        </div>
        {country.name.nativeName && country.name.nativeName.eng && (
          <div className="flex flex-row text-sm">
            <p className="font-semibold text-gray-800">Native:</p>
            <p className="pl-1 text-gray-500 truncate">
              <p>{country.name.nativeName.eng.official}</p>
            </p>
          </div>
        )}
        <div className="flex flex-row text-sm">
          <p className="font-semibold text-gray-800">Alternative:</p>
          <p className="pl-1 text-gray-500 truncate">
            {country.altSpellings.join(", ")}
          </p>
        </div>
        <div className="flex flex-row text-sm">
          <p className="font-semibold text-gray-800 whitespace-nowrap">
            Calling Codes:
          </p>
          <p className="pl-1 text-gray-500 truncate">
            {country.idd.root}
            {country.idd.suffixes && country.idd.suffixes.length > 0
              ? country.idd.suffixes.join(", ")
              : ""}
          </p>
        </div>
        {/* This div will push the "Read More" to the bottom */}
        <div className="flex-grow pt-1"></div>
        <div className="flex flex-row text-sm justify-end align-bottom items-end">
          <MoveRight className="text-[#6466ef]" />
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
