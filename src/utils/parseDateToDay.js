const days = [
  { full: 'Sunday', short: 'Sun.' },
  { full: 'Monday', short: 'Mon.' },
  { full: 'Tuesday', short: 'Tue.' },
  { full: 'Wednesday', short: 'Wed.' },
  { full: 'Thursday', short: 'Thu.' },
  { full: 'Friday', short: 'Fri.' },
  { full: 'Saturday', short: 'Sat.' },
];

const parseDateToDay = (date) => {
  return days[date.getDay()];
};

export default parseDateToDay;
