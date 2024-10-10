import { IoIosSearch } from "react-icons/io";

export function SearchSort({
  searchCountry,
  setSearchCountry,
  sortRegion,
  setSortRegion,
  darkMode,
}) {
  return (
    <div className="max-w-[1280px] mobile:max-w-[343px] w-full h-[56px] mobile:h-[136px] flex justify-between mx-auto mt-[48px] mobile:mt-[24px] mobile:flex-col">
      <div className="relative">
        <IoIosSearch
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${
            darkMode ? `text-white` : `text-[#848484]`
          }`}
        />
        <input
          className={`w-[480px] mobile:w-[343px] h-[56px] mobile:h-[48px] rounded-[5px] pl-10 ${
            darkMode
              ? `bg-[#2B3844] placeholder-white`
              : `bg-white placeholder-[#848484]`
          }`}
          type="text"
          name=""
          id=""
          placeholder="Search for a country..."
          value={searchCountry}
          onChange={(e) => {
            setSearchCountry(e.target.value);
            setSortRegion("");
          }}
        />
      </div>
      <select
        className={`w-[200px] h-[56px] mobile:h-[48px] rounded-[5px] pl-[24px] mobile:pl-[16px] ${
          darkMode ? `bg-[#2B3844] text-white` : `bg-white`
        }`}
        name="region"
        id=""
        value={sortRegion}
        onChange={(e) => {
          setSortRegion(e.target.value);
          setSearchCountry("");
        }}
      >
        <option className="font-nunito text-[14px]" value="">
          Filter by Region
        </option>
        <option className="font-nunito text-[14px]" value="africa">
          Africa
        </option>
        <option className="font-nunito text-[14px]" value="america">
          America
        </option>
        <option className="font-nunito text-[14px]" value="asia">
          Asia
        </option>
        <option className="font-nunito text-[14px]" value="europe">
          Europe
        </option>
        <option className="font-nunito text-[14px]" value="oceania">
          Oceania
        </option>
      </select>
    </div>
  );
}
