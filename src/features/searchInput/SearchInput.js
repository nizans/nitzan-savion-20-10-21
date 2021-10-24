import { Transition } from "@headlessui/react";
import { USE_MOCK } from "constants/vars";
import { setDefaultLocation } from "features/fiveDayForecast/defaultLocation.slice";
import Spinner from "features/UI/Spinner";
import useDebounce from "hooks/useDebounce";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useFetchAutocomplete } from "lib/reactQuery/query.hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchInputValue } from "./SearchInput.hooks";
import SearchInputSuggestions from "./SearchInputSuggestions";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useSearchInputValue();
  const debouncedValue = useDebounce(searchValue, 300);
  const { data, isLoading, remove } = useFetchAutocomplete(debouncedValue);
  const { width: windowWidth } = useWindowDimensions();
  const [showSuggestions, setShowSuggestions] = useState(USE_MOCK ? searchValue.length > 2 : data?.length > 0);

  useEffect(() => {
    if ((USE_MOCK && searchValue.length > 2) || (!USE_MOCK && data?.length > 0)) setShowSuggestions(true);
    else setShowSuggestions(false);
  }, [searchValue, data]);

  const handleSelectItem = (key, cityName, countryName) => {
    dispatch(setDefaultLocation({ key, cityName, countryName }));
    setSearchValue("");
    remove();
  };

  return (
    <div className="flex border-2 border-primary rounded-md w-full max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto relative overflow-hidden">
      <input
        type="text"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Enter City Name..."
        className="w-full border-r text-xl xl:text-2xl 2xl:text-4xl pl-2 py-1 outline-none"
      />

      <Transition
        show={showSuggestions}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed mt-9 xl:mt-14 z-30"
      >
        <SearchInputSuggestions data={data} handleSelectItem={handleSelectItem} />
      </Transition>

      <span className="p-2 border-l-2 bg-gray-100 border-primary flex items-center">
        <Spinner
          size={windowWidth < 1280 ? "1.25rem" : windowWidth < 1280 ? "1.5rem" : "2.25rem"}
          className={` transition-all ${isLoading ? "opacity-100" : "opacity-0"}`}
        />
      </span>
    </div>
  );
};

export default SearchInput;
