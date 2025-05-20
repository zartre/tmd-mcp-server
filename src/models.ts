export interface Forecast {
  time: string; // RFC3339
  data: {
    rh: number; // Relative humidity
    tc: number; // Temperature in Celsius
  };
}

export interface WeatherForecast {
  location: {
    lat: number;
    lon: number;
  };
  forecasts: Array<Forecast>;
}

export interface HourlyForecast {
  WeatherForecasts: Array<WeatherForecast>;
}
