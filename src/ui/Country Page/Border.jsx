import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Border({ countryCode, darkMode }) {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );

        const data = await res.json();
        setCountry(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAdvice();
  }, [countryCode]);

  return (
    <Link to={`/country/${country?.name?.common}`}>
      <div
        className={`h-[26px] px-[10px] font-nunito font-light text-[14px] ${
          darkMode ? `text-white border-none bg-[#2B3844]` : `text-black border`
        }`}
      >
        {country?.name?.common}
      </div>
    </Link>
  );
}
