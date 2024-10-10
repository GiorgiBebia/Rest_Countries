import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function Back({ darkMode }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <div
      className={`w-[136px] mobile:w-[104px] h-[40px] mobile:h-[32px] m-[80px] mobile:mt-[40px] mobile:ml-[28px] mobile:mb-[64px] rounded-[6px] flex gap-[10px] items-center cursor-pointer justify-center ${
        darkMode ? `bg-[#2B3844] text-white` : `bg-white text-black`
      }`}
      onClick={handleClick}
    >
      <MdOutlineKeyboardBackspace className="text-[19px]" />
      <h3 className="font-nunito font-light text-[16px] mobile:text-[14px]">
        Back
      </h3>
    </div>
  );
}
