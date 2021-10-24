import useTemperatureString from "hooks/useTemperatureString";

export const useGetSingleDayTemps = (temp, feelsLike) => {
  const [minTempStr] = useTemperatureString(temp.Minimum.Value);
  const [maxTempStr] = useTemperatureString(temp.Maximum.Value);
  const [feelsLikeMin] = useTemperatureString(feelsLike.Minimum.Value);
  const [feelsLikeMax] = useTemperatureString(feelsLike.Maximum.Value);

  return { minTempStr, maxTempStr, feelsLikeMin, feelsLikeMax };
};
