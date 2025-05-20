import { formatGetHourlyForecast } from "../formatter.js";
import { HourlyForecast } from "../models.js";

describe("formatGetHourlyForecast", () => {
  it("should format the hourly forecast correctly", () => {
    const mockResponse: HourlyForecast = {
      WeatherForecasts: [
        {
          location: { lat: 13.7696, lon: 100.4965 },
          forecasts: [
            {
              time: "2025-05-19T21:00:00+07:00",
              data: { rh: 46.62, tc: 33.12 },
            },
            {
              time: "2025-05-19T22:00:00+07:00",
              data: { rh: 55.19, tc: 30.05 },
            },
          ],
        },
      ],
    };

    const expectedOutput =
      "It is 33.12°C with 46.62% relative humidity at 2025-05-19T21:00:00+07:00.\n" +
      "It is 30.05°C with 55.19% relative humidity at 2025-05-19T22:00:00+07:00.";

    const result = formatGetHourlyForecast(mockResponse);
    expect(result).toBe(expectedOutput);
  });

  it("should return an empty string if no forecasts are provided", () => {
    const mockResponse: HourlyForecast = {
      WeatherForecasts: [],
    };

    const result = formatGetHourlyForecast(mockResponse);
    expect(result).toBe("");
  });
});
