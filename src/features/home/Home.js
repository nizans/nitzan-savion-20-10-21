import FiveDayForecastWrapper from "features/fiveDayForecast/FiveDayForecastWrapper";
import { selectDefaultLocation } from "features/home/Home.slice";
import SearchInput from "features/searchInput/SearchInput";
import { selectTheme } from "features/theme/theme.slice";
import { useFetchLocationPhoto } from "lib/reactQuery/query.hooks";
import React from "react";
import { useSelector } from "react-redux";
import parseImageToSrc from "utils/imageFromBlob";

const Home = () => {
  const { dark } = useSelector(selectTheme);
  const { cityName, countryName } = useSelector(selectDefaultLocation);
  const { data: imageBlob, isSuccess, isLoading } = useFetchLocationPhoto(cityName, countryName);

  return (
    <div className="flex flex-col h-full  relative">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover "
        style={{
          backgroundImage: isLoading ? "url(https://placeimg.com/124/124/nature)" : isSuccess ? "url(" + parseImageToSrc(imageBlob) + ")" : "",
          filter: isLoading ? "blur(100px)" : "blur(0px)",
          transition: "1s filter linear",
        }}
      >
        <div
          className="w-full h-full "
          style={{
            background: dark
              ? `linear-gradient(90deg, rgba(20,33,61,0.9) 0%, rgba(20,33,61,0.5) 30%, rgba(20,33,61,0.5) 70%, rgba(20,33,61,0.9) 100%)`
              : `linear-gradient(90deg, rgba(229,229,229,0.9) 0%, rgba(229,229,229,0.5) 30%, rgba(229,229,229,0.5) 70%, rgba(229,229,229,0.9) 100%)`,
          }}
        ></div>
      </div>
      <div className="px-4 z-10">
        <div className="container mx-auto">
          <span className="flex w-full my-14">
            <SearchInput />
          </span>
          <FiveDayForecastWrapper />
        </div>
      </div>
    </div>
  );
};

export default Home;
