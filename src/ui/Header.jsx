import { MdOutlineNightlightRound } from "react-icons/md";
import { Link } from "react-router-dom";

export function Header({ darkMode, setDarkMode }) {
  function toggleDarkMode() {
    setDarkMode((dark) => !dark);
  }

  return (
    <div
      className={`max-w-[1440px] mobile:max-w-[375px] w-full h-[80px] ${
        darkMode ? `bg-[#2B3844]` : `bg-white`
      } flex justify-between pt-[24px]`}
    >
      <Link to="/">
        <h2
          className={`font-nunito font-extrabold text-[24px] mobile:text-[14px] ml-[81px] mobile:ml-[16px] ${
            darkMode ? `text-white` : `text-[#111517]`
          }`}
        >
          Where in the world?
        </h2>
      </Link>
      <div
        className={`w-[108px] h-[22px] flex gap-[8px] items-center mr-[80px] mobile:mr-[16px] cursor-pointer ${
          darkMode ? `text-white` : `text-black`
        }`}
        onClick={toggleDarkMode}
      >
        <MdOutlineNightlightRound className="w-[15px] h-[15px]" />
        <h3 className="font-nunito font-semibold text-[16px]">Dark Mode</h3>
      </div>
    </div>
  );
}
