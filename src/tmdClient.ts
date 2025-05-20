import { HourlyForecast } from "./models.js";

const TMD_ENDPOINT = "https://data.tmd.go.th/nwpapi/v1/forecast";

export interface TmdClient {
  getHourlyForecast: (lat: number, lon: number) => Promise<HourlyForecast>;
}

export class TmdClientImpl implements TmdClient {
  retrieve = async <T>(url: string) => {
    const response = await fetch(`${TMD_ENDPOINT}/${url}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TMD_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseJson = await response.json();
    console.error("Response JSON:", responseJson);

    return responseJson as T;
  };

  getHourlyForecast = async (lat: number, lon: number) => {
    const query = new URLSearchParams({
      lat: lat.toString(),
      lon: lon.toString(),
    }).toString();

    console.error(`env: ${process.env.TMD_API_KEY}`);

    return this.retrieve<HourlyForecast>(`location/hourly/at?${query}`);
  };
}
