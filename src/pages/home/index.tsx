import { darkModeState } from '@/utils/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';

function Home() {
  const darkMode = useRecoilValue(darkModeState);
  const setDarkMode = useSetRecoilState(darkModeState);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const darkModeClass = () => {
    return darkMode ? 'dark' : 'light';
  };

  return (
    <div className={darkModeClass()}>
      <section className="bg-white dark:bg-slate-800 text-gray-600 dark:text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font">
              Slow-carb next level shoindxgoitch ethical authentic, scenester
              sriracha forage.
            </h1>
            <button
              className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
              onClick={toggleDarkMode}
            >
              Toggle Dark Mode
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
