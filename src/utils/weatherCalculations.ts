import { List } from '../types/City';

export function calcTemperature(tempValue: number) {
    const apiGap = 273.15;

    return (tempValue - apiGap).toFixed(1);
}

export function calculateTimezone(
    offset: number,
    withMinutes: boolean = false
) {
    const now = new Date();
    const utcTimestamp = now.getTime() + now.getTimezoneOffset();
    const targetTimestamp = utcTimestamp + offset * 1000;

    const targetDate = new Date(targetTimestamp);

    if (withMinutes) {
        const hours = targetDate.getUTCHours().toString().padStart(2, '0');
        const minutes = targetDate.getUTCMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    return targetDate.getUTCHours();
}

export function formatTimeFromInt(time: number) {
    return time < 10 ? `0${time}:00` : `${time}:00`;
}

export function isRaining(forecast: List) {
    return !!forecast.rain;
}
