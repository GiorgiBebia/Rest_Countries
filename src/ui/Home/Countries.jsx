import { useState, useEffect } from "react";
import { Country } from "./Country";
import { CountryNotFound } from "./CountryNotFound";

export function Countries({ searchCountry, sortRegion, darkMode }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAdvice = async () => {
      setLoading(true);
      try {
        let res;
        if (searchCountry.length === 0 && !sortRegion) {
          res = await fetch(`https://restcountries.com/v3.1/all`);
        } else if (searchCountry.length === 0 && sortRegion) {
          res = await fetch(
            `https://restcountries.com/v3.1/region/${sortRegion}`
          );
        } else if (searchCountry.length > 0) {
          res = await fetch(
            `https://restcountries.com/v3.1/name/${searchCountry}`
          );
        }

        const data = await res.json();
        setData(data);
        setError("");
      } catch (error) {
        setError(`${error}`);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvice();
  }, [searchCountry, sortRegion]);

  return (
    <div className="max-w-[1281px] mobile:max-w-[264px] w-full h-[747px] mobile:h-[2968px] mx-auto mt-[48px] mobile:mt-[32px] overflow-hidden flex flex-wrap gap-[75px] mobile:gap-[40px] justify-center ">
      {loading && <h2 className="text-[72px] content-center">Loading...</h2>}
      {data.length > 0
        ? data.map((item, i) => (
            <Country item={item} key={i} darkMode={darkMode} />
          ))
        : !error && !loading && <CountryNotFound />}
    </div>
  );
}
