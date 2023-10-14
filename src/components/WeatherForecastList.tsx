import React from 'react';

import { WeatherForecastItem } from './WeatherForecastItem';

import { List } from '../types/City';

import { calcTemperature } from '../utils/weatherCalculations';

interface Props {
    currentTime: number;
    forecast: List[];
}

const TIME_INTERVAL = 3;
const MAX_HOURS = 24;
const WEATHER_API_URL = 'https://openweathermap.org/img/wn/';

export const WeatherForecastList: React.FC<Props> = ({
    forecast,
    currentTime,
}) => {
    const calculateTime = (index: number) => (currentTime + (index + 1) * TIME_INTERVAL) % MAX_HOURS;
    

    return (
        <div className='pb-4 flex justify-evenly flex-wrap gap-2'>
            <table className='w-full border border-gray-300'>
                <thead>
                    <tr className='bg-custom-pale-blue text-xs md:text-lg'>
                        <th className='h-10 w-1/3 text-center'>Time (+3)</th>
                        <th className='h-10 w-1/3 text-center border-l border-r'>
                            Temp (°C)
                        </th>
                        <th className='h-10 w-1/3 text-center'>Feels Like (°C)</th>
                    </tr>
                </thead>
                <tbody>
                    {forecast.map((weather, index) => {
                        return (
                            <WeatherForecastItem
                                key={weather.dt_txt}
                                time={calculateTime(index)}
                                maxTemperature={weather.main.temp_max}
                                minTemperature={weather.main.temp_min}
                                feelsLike={calcTemperature(weather.main.feels_like)}
                                icon={`${WEATHER_API_URL}${forecast[index].weather[0].icon}@2x.png`}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
