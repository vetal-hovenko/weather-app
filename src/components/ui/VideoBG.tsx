import React, { useMemo } from 'react';

import rainBg from '../../assets/rain.mp4';
import nightBg from '../../assets/night.mp4';
import sunnyBg from '../../assets/sky.mp4';
import { City } from '../../types/City';

interface Props {
    city: City;
    isNight: boolean;
}

export const VideoBG: React.FC<Props> = ({  city, isNight }) => {
    const timeOfDayBackground = isNight ? nightBg : sunnyBg;

    const backgroundVideo: string = useMemo(
        () => (city?.list[0].rain ? rainBg : timeOfDayBackground),
        [city?.list, timeOfDayBackground]
    );

    return (
        <video
            autoPlay
            muted
            loop
            id='video-background'
            className={`object-cover w-full h-full animate-opacityAnimation`}
        >
            <source src={backgroundVideo} type='video/mp4' />
        </video>
    );
};
