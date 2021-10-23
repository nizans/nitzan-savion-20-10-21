import { selectTheme } from "features/theme/theme.slice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const getTempString = (temp, isCelsius) => {
  if (isCelsius) return `${temp}℃`;
  return `${(temp * 1.8 + 32.0).toFixed("1")}℉`;
};

const useTemperatureString = _temp => {
  const { celsius } = useSelector(selectTheme);
  const [temp, setTemp] = useState(_temp);
  const [str, setStr] = useState();
  useEffect(() => {
    setStr(getTempString(temp, celsius));
  }, [temp, celsius]);

  return [str, setTemp];
};

export default useTemperatureString;
