import { darkModeState } from '@/utils/atoms';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

function Home() {
  const [themeName, setThemeName] = useState('');
  const darkMode = useRecoilValue(darkModeState);
  const setDarkMode = useSetRecoilState(darkModeState);

  const toggleDarkMode = () => {
    setThemeName('');
    setDarkMode(!darkMode);
  };

  const getTheme = () => {
    if (themeName === '') {
      return darkMode ? 'dark' : 'light';
    }
    return themeName;
  };

  return (
    <div data-theme={getTheme()}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary" onClick={toggleDarkMode}>
              Toggle Dark Mode
            </button>
            <button
              className="ml-4 btn btn-outline btn-accent"
              onClick={() => setThemeName('cupcake')}
            >
              Activate Cupcake
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
