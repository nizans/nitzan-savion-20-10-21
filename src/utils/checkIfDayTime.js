const checkIfDayTime = (sunRise, sunSet) => {
  const timeNow = new Date();
  const rise = new Date(sunRise);
  const set = new Date(sunSet);
  timeNow.setDate(0);
  rise.setDate(0);
  set.setDate(0);
  if (timeNow >= rise && timeNow <= set) {
    return true;
  }
  return false;
};

export default checkIfDayTime;
