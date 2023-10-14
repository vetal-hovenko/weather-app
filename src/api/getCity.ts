export async function getCity(cityForSearch: string) {
    const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityForSearch}&APPID=32962562c8957cf5f9b143d89f0ae7ac`
    );

    if (!data.ok) {
        throw new Error('City not found');
    }

    return data.json();
}
