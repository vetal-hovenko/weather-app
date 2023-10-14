import React from 'react';
import { useSearchParams, SetURLSearchParams } from 'react-router-dom';

import { WeatherForecastList } from './WeatherForecastList';

import { City } from '../types/City';
import { ErrorMessage } from '../types/ErrorMessage';

import {
    calcTemperature,
    calculateTimezone,
} from '../utils/weatherCalculations';

import { RemoveCityButton } from './ui/RemoveCityButton';
import { getWeatherImage } from '../utils/getWeatherImage';

interface Props {
    city: City;
    isNight: boolean;
    setCity: React.Dispatch<React.SetStateAction<City | null>>;
    setInitialCityParams: SetURLSearchParams;
    setErrorMessage: React.Dispatch<React.SetStateAction<ErrorMessage>>;
}

export const CityInfo: React.FC<Props> = ({
    city,
    isNight,
    setCity,
    setInitialCityParams,
    setErrorMessage,
}) => {
    const temperature = calcTemperature(city.list[0].main.temp);
    const [searchParams] = useSearchParams();

    const weatherDescription = city.list[0].weather[0].description;

    const image = getWeatherImage(isNight, city);

    const description =
        weatherDescription[0].toUpperCase() + weatherDescription.slice(1);

    const forecast = city.list.slice(1, 9);
    const currentTimeString = calculateTimezone(city.city.timezone, true);
    const currentTime = calculateTimezone(city.city.timezone);

    const handleRemoveCity = () => {
        const currentParams = searchParams;
        currentParams.delete('city');

        setCity(null);
        setInitialCityParams(currentParams);
        setErrorMessage(ErrorMessage.NO_ERROR);
    };

    return (
        <section className='overflow-y-auto rounded-md p-5 w-full h-full bg-custom-black text-white absolute top-0'>
            <h2 className='pb-5 border-b-2 border-gray-400 text-2xl md:text-4xl text-center font-bold'>
                {city.city.name} - {currentTimeString}
            </h2>

            <RemoveCityButton handleRemoveCity={handleRemoveCity} />

            <article className='h-4/5 flex-grow text-center flex flex-col justify-between'>
                <div className='flex pt-10 pb-10 gap-4 md:gap-20 justify-center items-center'>
                    <div>
                        <h3 className='text-2xl md:text-3xl text-bold'>
                            {description}
                        </h3>
                        <p className='text-base md:text-xl font-bold'>{`${temperature}° C`}</p>
                    </div>

                    <img
                        src={image}
                        alt={description}
                        className={`w-12 md:w-16 md:h-16 self-center bg-center bg-no-repeat`}
                    />
                </div>

                <WeatherForecastList
                    currentTime={currentTime as number}
                    forecast={forecast}
                />
            </article>
        </section>
    );
};
