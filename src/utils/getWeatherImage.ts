import { City } from '../types/City';
import { isRaining } from './weatherCalculations';

import sunImage from '../assets/images/clear-day.png';
import rainImage from '../assets/images/rain.png';
import cloudyDay from '../assets/images/partly-cloudy-day.png';
import cloudyNight from '../assets/images/partly-cloudy-night.png';
import moonImage from '../assets/images/clear-night.png';

export const getWeatherImage = (isNight: boolean, city: City) => {
    const weatherDescription = city.list[0].weather[0].description;
    const isCloudy = weatherDescription.includes('cloud');

    if (isRaining(city.list[0])) {
        return rainImage;
    } else if (isCloudy) {
        return isNight ? cloudyNight : cloudyDay;
    } else {
        return isNight ? moonImage : sunImage;
    }
};