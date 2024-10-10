import { useEffect, useState } from "react";
import { Main } from "./Main";
import { Header } from "../Header";

function Home() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className="max-w-[1440px] mobile:max-w-[375px] w-full h-[1024px] mobile:h-[3305px]">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default Home;
