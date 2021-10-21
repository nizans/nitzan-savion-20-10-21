import Spinner from 'components/UI/Spinner';
import { useFetchSearchByCity } from 'hooks/reactQuery';
import { useState } from 'react';

const SearchInput = () => {
  const [value, setValue] = useState('');
  return (
    <div className="flex border-2 border-black rounded-md w-full max-w-xl mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter City Name..."
        className="w-full border-r text-xl pl-2 outline-none"
      />
      {true && (
        <span className="p-2 border-l border-black">
          <Spinner style={{ visibility: 'visible' }} />
        </span>
      )}
    </div>
  );
};

export default SearchInput;
