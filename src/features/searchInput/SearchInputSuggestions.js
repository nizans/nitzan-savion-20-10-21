import React from "react";

const SearchInputSuggestions = ({ data, handleSelectItem }) => {
  return (
    <ul className=" bg-primary border-black border pl-2 pr-4 divide-y">
      {data?.map(sug => (
        <li
          key={sug.Key + sug.Rank}
          className="text-xl my-1 "
          onClick={() => handleSelectItem(sug.Key, sug.LocalizedName, sug.Country.LocalizedName)}
        >
          <span className="cursor-pointer hover:text-light-darker text-2xl">{sug.LocalizedName + ", " + sug.Country.LocalizedName}</span>
        </li>
      ))}
    </ul>
  );
};

export default SearchInputSuggestions;
