import { Border } from "./Border";

export function CountryPageMain({ country, darkMode }) {
  const nativeName = country?.name?.nativeName
    ? Object.values(country?.name?.nativeName)[0].official
    : "";

  const currencies = country?.currencies
    ? Object.values(country?.currencies)[0].name
    : "";

  const language = country?.languages
    ? Object.values(country?.languages).join(", ")
    : "";

  const borderCountries = country?.borders || [];

  return (
    <div className="max-w-[1278px] w-full h-[401px] mx-auto flex justify-between mobile:flex-col mobile:items-center">
      <img
        className="w-[560px] mobile:w-[319px] h-[401px] mobile:h-[229px] rounded-[14px]"
        src={country?.flags?.png}
        alt={country?.name?.common}
      />
      <div className="w-[598px] mobile:w-[308px] h-[323px] mobile:h-[436px] mobile:mt-[44px]">
        <h1
          className={`font-nunito font-extrabold text-[32px] ${
            darkMode ? `text-white` : `text-black`
          }`}
        >
          {country?.name?.common}
        </h1>
        <div
          className={`flex justify-between mt-[23px] mobile:flex-col mobile:gap-[32px] mobile:mt-[16px] ${
            darkMode ? `text-white` : `text-black`
          }`}
        >
          <div className="h-[160px] flex flex-col justify-between">
            <h3>
              <span className="font-nunito font-semibold text-[16px]">
                Native Name:{" "}
              </span>
              <span className="font-nunito font-light text-[16p]">
                {nativeName}
              </span>
            </h3>
            <h3>
              <span className="font-nunito font-semibold text-[16px]">
                Population:{" "}
              </span>
              <span className="font-nunito font-light text-[16p]">
                {country?.population.toLocaleString()}
              </span>
            </h3>
            <h3>
              <span className="font-nunito font-semibold text-[16px]">
                Region:{" "}
              </span>
              <span className="font-nunito font-light text-[16p]">
                {country?.region}
              </span>
            </h3>
            <h3>
              <span className="font-nunito font-semibold text-[16px]">
                Sub Region:{" "}
              </span>
              <span className="font-nunito font-light text-[16p]">
                {country?.subregion}
              </span>
            </h3>
            <h3>
              <span className="font-nunito font-semibold text-[16px]">
                Capital:{" "}
              </span>
              <span className="font-nunito font-light text-[16p]">
                {country?.capital}
              </span>
            </h3>
          </div>
          <div className="h-[96px] flex flex-col justify-between">
            <h3>
              <span className="font-nunito font-semibold text-[16px]">
                Top Level Domain:{" "}
              </span>
              <span className="font-nunito font-light text-[16p]">
                {country?.tld}
              </span>
            </h3>
            <h3>
              <span className="font-nunito font-semibold text-[16px]">
                Currencies:{" "}
              </span>
              <span className="font-nunito font-light text-[16p]">
                {currencies}
              </span>
            </h3>
            <h3>
              <span className="font-nunito font-semibold text-[16px]">
                Languages:{" "}
              </span>
              <span className="font-nunito font-light text-[16p]">
                {language}
              </span>
            </h3>
          </div>
        </div>
        <div className="mt-[68px] mobile:mt-[34px] flex gap-[10px] mobile:gap-[16px] mobile:flex-col">
          <h3
            className={`w-[175px] font-nunito font-semibold text-[16px] mr-[6px] ${
              darkMode ? `text-white` : `text-black`
            }`}
          >
            Border Countries:
          </h3>
          <div className="flex flex-wrap gap-[10px]">
            {borderCountries.length > 0 ? (
              borderCountries.map((countryCode, i) => (
                <Border countryCode={countryCode} key={i} darkMode={darkMode} />
              ))
            ) : (
              <span className={`${darkMode ? `text-white` : `text-black`}`}>
                No Border Countries
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
