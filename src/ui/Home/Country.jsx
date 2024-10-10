import { Link } from "react-router-dom";

export function Country({ item, darkMode }) {
  return (
    <div
      className={`w-[264px] h-[336px] rounded-[5px] ${
        darkMode ? `bg-[#2B3844]` : `bg-white`
      } overflow-hidden`}
    >
      <img
        className="w-[267px] h-[160px]"
        src={item.flags.png}
        alt={item.name.common}
      />
      <h2
        className={`mt-[24px] mr-[24px] mb-[16px] ml-[24px] font-nunito font-extrabold text-[18px] ${
          darkMode ? `text-white` : `text-black`
        }`}
      >
        <Link to={`/country/${item.name.official}`}>{item.name.common}</Link>
      </h2>
      <div
        className={`ml-[24px] flex gap-[2px] ${
          darkMode ? `text-white` : `text-black`
        }`}
      >
        <h3 className="font-nunito font-semibold text-[14px]">Population:</h3>
        <h3 className="font-nunito font-light text-[14px]">
          {item.population.toLocaleString()}
        </h3>
      </div>
      <div
        className={`ml-[24px] flex gap-[2px] mt-[8px] ${
          darkMode ? `text-white` : `text-black`
        }`}
      >
        <h3 className="font-nunito font-semibold text-[14px]">Region:</h3>
        <h3 className="font-nunito font-light text-[14px]">{item.region}</h3>
      </div>
      <div
        className={`ml-[24px] flex gap-[2px] mt-[8px] ${
          darkMode ? `text-white` : `text-black`
        }`}
      >
        <h3 className="font-nunito font-semibold text-[14px]">Capital:</h3>
        <h3 className="font-nunito font-light text-[14px]">{item.capital}</h3>
      </div>
    </div>
  );
}
