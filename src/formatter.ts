import { HourlyForecast } from "./models.js";

export const formatGetHourlyForecast = (hourly: HourlyForecast) =>
  hourly.WeatherForecasts.map((forecast) =>
    forecast.forecasts
      .map(
        (day) =>
          `It is ${day.data.tc}°C with ${day.data.rh}% relative humidity at ${day.time}.`
      )
      .join("\n")
  ).join("\n");
