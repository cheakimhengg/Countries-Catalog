import React from "react";

function CountryCard({ country }) {
  return (
    <div
      key={country.cca3}
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
      <div className="flex flex-col p-4">
        <h3 className="font-bold my-2 pb-2 text-lg">{country.name.official}</h3>
        <div className="flex flex-row text-sm">
          <p className="font-semibold">Country Code:</p>
          <p className="pl-1 text-gray-500">
            {country.cca2}/{country.cca3}
          </p>
        </div>
        {country.name.nativeName && country.name.nativeName.eng && (
          <div className="flex flex-row text-sm">
            <p className="font-semibold">Native:</p>
            <p className="pl-1 text-gray-500 truncate">
              <p>{country.name.nativeName.eng.official}</p>
            </p>
          </div>
        )}
        <div className="flex flex-row text-sm">
          <p className="font-semibold">Alternative:</p>
          <p className="pl-1 text-gray-500 truncate">
            {country.altSpellings.join(", ")}
          </p>
        </div>
        <div className="flex flex-row text-sm">
          <p className="font-semibold">Calling Codes:</p>
          <p className="pl-1 text-gray-500 truncate">
            {country.idd.root}
            {country.idd.suffixes}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
