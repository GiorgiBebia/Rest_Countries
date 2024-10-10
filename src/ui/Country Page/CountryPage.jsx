import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../Header";
import { Line } from "./Line";
import { Back } from "./Back";
import { CountryPageMain } from "./CountryPageMain";

function CountryPage() {
  const location = useLocation();
  const link = location.pathname.split("/");
  link.shift();
  link.shift();
  const newLink = link[0].split("%20").join(" ");

  useEffect(
    function () {
      document.title = `${newLink} | Rest Countries | Frontend Mentor`;
    },
    [location]
  );

  const [country, setCountry] = useState(null);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const fetchAdvice = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${link}`);

      const data = await res.json();
      setCountry(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, [location]);

  return (
    <div
      className={`max-w-[1440px] mobile:max-w-[375px] w-full h-[1024px] mobile:h-[1000px] ${
        darkMode ? `bg-[#202C36]` : `bg-white`
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Line />
      <Back darkMode={darkMode} />
      <CountryPageMain country={country} darkMode={darkMode} />
    </div>
  );
}

export default CountryPage;
