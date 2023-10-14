import React, { useState } from 'react';
import { ErrorMessage } from '../types/ErrorMessage';
import { SearchButton } from './ui/SearchButton';

interface Props {
    errorMessage: ErrorMessage;
    setErrorMessage: React.Dispatch<React.SetStateAction<ErrorMessage>>;
    handleSearch: (cityName: string) => Promise<void>
}

const { NO_ERROR } = ErrorMessage;

export const SearchCity: React.FC<Props> = ({
    errorMessage,
    setErrorMessage,
    handleSearch
}) => {
    const [cityForSearch, setCityForSearch] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCityForSearch(event.target.value);
        setErrorMessage(NO_ERROR);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSearch(cityForSearch);
        setCityForSearch('');
    };

    return (
        <form
            action='GET'
            className='flex pb-8 gap-4 items-center w-2/3 md:w-1/3'
            onSubmit={(event) => handleFormSubmit(event)}
        >
            <div className='w-full'>
                <input
                    className='rounded-lg h-12 p-2 w-full'
                    type='text'
                    placeholder='Enter the city...'
                    value={cityForSearch}
                    onChange={(event) => handleInputChange(event)}
                />
                {errorMessage && (
                    <p className='absolute font-bold text-sm text-white pt-2'>
                        {errorMessage}
                    </p>
                )}
            </div>

            <SearchButton />
        </form>
    );
};
