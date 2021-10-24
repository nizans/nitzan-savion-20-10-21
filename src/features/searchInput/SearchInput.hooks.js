import { infoNotification } from "features/notifications/notifications.model";
import { addNotification, selectNotification } from "features/notifications/notifications.slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useSearchInputValue = () => {
  const notifications = useSelector(selectNotification);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const handleInvalidInput = () => {
    if (!notifications.some(notf => notf.title === "Invalid input"))
      dispatch(addNotification(infoNotification("Only english characters allowed", 5000, "Invalid input")));
  };

  const handleSearchInputChange = input => {
    if (/[^A-Za-z]/gi.test(input)) handleInvalidInput();
    input = input.replace(/[^A-Za-z]/gi, "");
    setSearchValue(input);
  };

  return [searchValue, handleSearchInputChange];
};
