import { useState } from "react";
import { Countries } from "./Countries";
import { SearchSort } from "./SearchSort";

export function Main({ darkMode }) {
  const [searchCountry, setSearchCountry] = useState("");
  const [sortRegion, setSortRegion] = useState("");

  return (
    <div
      className={`max-w-[1440px] mobile:max-w-[375px] w-full h-[944px] mobile:h-[3225px] ${
        darkMode ? `bg-[#202C36]` : `bg-gray-100`
      } flex flex-col`}
    >
      <SearchSort
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        sortRegion={sortRegion}
        setSortRegion={setSortRegion}
        darkMode={darkMode}
      />
      <Countries
        searchCountry={searchCountry}
        sortRegion={sortRegion}
        darkMode={darkMode}
      />
    </div>
  );
}
