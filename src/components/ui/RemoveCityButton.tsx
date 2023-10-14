import React from 'react';

interface Props {
    handleRemoveCity: () => void;
}

export const RemoveCityButton: React.FC<Props> = ({ handleRemoveCity }) => {
    return (
        <button
            onClick={() => handleRemoveCity()}
            className='absolute opacity-20 hover:opacity-100 text-white text-xl top-2 right-6 z-1'
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                />
            </svg>
        </button>
    );
};
