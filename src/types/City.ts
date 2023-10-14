export interface List {
    dt: number;
    dt_txt: string;
    main: {
        temp: number;
        temp_max: number;
        temp_min: number;
        feels_like: number;
    };
    rain?: {
        '3h': number;
    };
    weather: [{ description: string; icon: string }];
    wind: { speed: number };
}

export interface City {
    city: {
        id: number;
        name: string;
        timezone: number;
    };
    list: List[];
}
