import React from 'react';

import { calcTemperature, formatTimeFromInt } from '../utils/weatherCalculations';

interface Props {
    time: number;
    feelsLike: string;
    icon: string;
    maxTemperature: number;
    minTemperature: number
}

export const WeatherForecastItem: React.FC<Props> = ({
    time,
    feelsLike,
    icon,
    maxTemperature,
    minTemperature,
}) => {
    const temperature = calcTemperature((maxTemperature + minTemperature) / 2)
    return (
        <>
            <tr className='border-b h-20 md:h-24 border-gray-300 bg-custom-black text-base md:text-lg relative'>
                <td className='flex flex-col items-center justify-evenly'>
                    <img
                        src={icon}
                        alt='Weather icon'
                        className='w-14 h-16 md:w-20 md:h-20 absolute -top-1 md:-top-2'
                    />
                    <h3 className='text-l font-bold absolute bottom-1'>
                        {formatTimeFromInt(time)}
                    </h3>
                </td>

                <td className='border-l border-r'>{`${temperature} °C`}</td>
                <td>{`${feelsLike}  °C`}</td>
            </tr>
        </>
    );
};
