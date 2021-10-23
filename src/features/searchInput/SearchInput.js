import { infoNotification } from "features/notifications/notifications.model";
import { addNotification, selectNotification } from "features/notifications/notifications.slice";
import Spinner from "features/UI/Spinner";
import useDebounce from "hooks/useDebounce";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useFetchSearchByCity } from "lib/reactQuery/query.hooks";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInputSuggestions from "./SearchInputSuggestions";

const SearchInput = () => {
  const notifications = useSelector(selectNotification);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 300);
  const { data, isLoading, isSuccess } = useFetchSearchByCity(debouncedValue);
  const { width: windowWidth } = useWindowDimensions();

  const handleInvalidInput = () => {
    if (!notifications.some(notf => notf.title === "Invalid input"))
      dispatch(addNotification(infoNotification("Only english characters allowed", 5000, "Invalid input")));
  };
  const handleChange = input => {
    if (/[^A-Za-z]/gi.test(input)) handleInvalidInput();
    input = input.replace(/[^A-Za-z]/gi, "");
    setValue(input);
  };

  return (
    <div className="flex border-2 border-primary rounded-md w-full max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto relative overflow-hidden">
      <input
        type="text"
        value={value}
        onChange={e => handleChange(e.target.value)}
        placeholder="Enter City Name..."
        className="w-full border-r text-xl xl:text-2xl 2xl:text-4xl pl-2 py-1 outline-none "
      />
      <label></label>
      {isSuccess && <SearchInputSuggestions data={data} />}
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
