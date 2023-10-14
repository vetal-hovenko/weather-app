import { useSearchParams } from 'react-router-dom';
import { ErrorMessage } from '../types/ErrorMessage';
import { useState } from 'react';
import { City } from '../types/City';
import { getCity } from '../api/getCity';

const { NO_ERROR, NOT_FOUND, INVALID_NAME, ALREADY_DISPLAYED } = ErrorMessage;

export const useCitySearch = () => {
    const [initialCityParams, setInitialCityParams] = useSearchParams();
    const [city, setCity] = useState<City | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(NO_ERROR);

    const handleSearch = async (cityName: string) => {
        if (!cityName.replace(/\s+/, '')) {
            setErrorMessage(INVALID_NAME);
            return;
        }

        if (
            setErrorMessage &&
            cityName.toLowerCase() === city?.city.name.toLowerCase() &&
            errorMessage !== NOT_FOUND
        ) {
            setErrorMessage(ALREADY_DISPLAYED);
            return;
        }

        try {
            const currentParams = initialCityParams;
            currentParams.set('city', cityName);
            setInitialCityParams(currentParams);

            setIsLoading(true);

            setCity(await getCity(cityName));
            setErrorMessage(NO_ERROR);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(NOT_FOUND);
            setIsLoading(false);
        }
    };

    return {
        city,
        setCity,
        isLoading,
        setErrorMessage,
        errorMessage,
        handleSearch,
    };
};
