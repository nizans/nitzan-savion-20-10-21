import { useSelector } from 'react-redux';
import { selectTheme } from 'features/theme/theme.slice';
import { useEffect } from 'react';

const useDarkMode = () => {
  const { dark } = useSelector(selectTheme);
  const html = document.querySelector('html');
  useEffect(() => {
    if (dark) html.classList.add('dark');
    else html.classList.remove('dark');
  }, [dark]);
};

export default useDarkMode;
