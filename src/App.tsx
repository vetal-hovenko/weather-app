import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import './styles/utility-styles.css';

import { CityInfo } from './components/CityInfo';
import { Loader } from './components/Loader';
import { SearchCity } from './components/SearchCity';
import { VideoBG } from './components/ui/VideoBG';

import { calculateTimezone } from './utils/weatherCalculations';

import { useCitySearch } from './hooks/useCitySearch';

function App() {
    const [initialCityParams, setInitialCityParams] = useSearchParams();

    const {
        city,
        setCity,
        isLoading,
        errorMessage,
        setErrorMessage,
        handleSearch
    } = useCitySearch();

    const isNight = useMemo(() => {
        if (city) {
            const currentTime = calculateTimezone(city.city.timezone) as number;
            return currentTime >= 21 || currentTime <= 6;
        }
    }, [city]);

    useEffect(() => {
        const initialCity = initialCityParams.get('city');

        if (initialCity && !errorMessage) {
            handleSearch(initialCity);
        }
    }, []);

    const isCityLoaded = city && !isLoading;

    return (
        <>
            <main className='font-comfortaa min-w-[300px] w-full h-screen box-content'>
                <div
                    className={`p-4 w-full h-full flex flex-col justify-center items-center transition-transform duration-300 ${
                        !city && 'translate-y-1/4'
                    }`}
                >
                    <h1 className='font-bold text-5xl lg:text-6xl text-white pb-4'>
                        Weather
                    </h1>

                    <SearchCity
                        errorMessage={errorMessage}
                        setErrorMessage={setErrorMessage}
                        handleSearch={handleSearch}
                    />

                    <div className='rounded-2xl relative w-full md:w-3/4 h-full overflow-hidden bg-pale-blue'>
                        {isCityLoaded && (
                            <VideoBG isNight={!!isNight} city={city} />
                        )}

                        {isLoading ? (
                            <Loader />
                        ) : (
                            isCityLoaded && (
                                <CityInfo
                                    city={city}
                                    isNight={!!isNight}
                                    setCity={setCity}
                                    setInitialCityParams={setInitialCityParams}
                                    setErrorMessage={setErrorMessage}
                                />
                            )
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
