import { infoNotification } from "features/notifications/notifications.model";
import { addNotification, selectNotification } from "features/notifications/notifications.slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const inputRegexPattern = /[^A-Za-z ]/gi;

export const useSearchInputValue = () => {
  const notifications = useSelector(selectNotification);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const handleInvalidInput = () => {
    if (!notifications.some(notf => notf.title === "Invalid input"))
      dispatch(addNotification(infoNotification("Only english characters allowed", 5000, "Invalid input")));
  };

  const handleSearchInputChange = input => {
    if (inputRegexPattern.test(input)) handleInvalidInput();
    input = input.replace(inputRegexPattern, "");
    setSearchValue(input);
  };

  return [searchValue, handleSearchInputChange];
};
