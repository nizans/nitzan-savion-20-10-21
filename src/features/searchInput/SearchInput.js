import Spinner from 'features/UI/Spinner';
import { useFetchSearchByCity } from 'hooks/reactQuery';
import useDebounce from 'hooks/useDebounce';
import autoMOCK from 'mock/autocomple.json';
import { useState } from 'react';
import SearchInputSuggestions from './SearchInputSuggestions';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 300);
  const { isLoading, isSuccess } = useFetchSearchByCity(debouncedValue);
  const data = autoMOCK;
  return (
    <div className="flex border-2 border-primary rounded-md w-full max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto relative overflow-hidden">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter City Name..."
        className="w-full border-r text-xl xl:text-2xl 2xl:text-4xl pl-2 py-1 outline-none "
      />
      {isSuccess && <SearchInputSuggestions data={data} />}
      <span className="p-2 border-l-2 bg-gray-100 border-primary">
        <Spinner
          className={` transition-all  ${
            isLoading ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </span>
    </div>
  );
};

export default SearchInput;
