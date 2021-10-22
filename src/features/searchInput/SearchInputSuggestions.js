import { setDefaultLocation } from 'features/home/Home.slice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchInputSuggestions = ({ data }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleSelectItem = (key, cityName, countryName) => {
    setOpen(false);
    dispatch(setDefaultLocation({ key, cityName, countryName }));
  };

  useEffect(() => {
    if (data.length > 0) setOpen(true);
  }, [data]);

  return open ? (
    <ul className="fixed mt-10 bg-white border-black border pl-2 pr-4 divide-y z-30">
      {data.map((sug) => (
        <li
          key={sug.Key + sug.Rank}
          className="text-xl my-1"
          onClick={() =>
            handleSelectItem(
              sug.Key,
              sug.LocalizedName,
              sug.Country.LocalizedName
            )
          }
        >
          {sug.LocalizedName + ', ' + sug.Country.LocalizedName}
        </li>
      ))}
    </ul>
  ) : null;
};

export default SearchInputSuggestions;
