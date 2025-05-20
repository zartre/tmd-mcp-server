import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { formatGetHourlyForecast } from "./formatter.js";
import { TmdClientImpl } from "./tmdClient.js";

const server = new McpServer({
  name: "TMD Weather",
  version: "1.0.0",
});

const tmdClient = new TmdClientImpl();

server.tool(
  "get-hourly-forecast",
  "Get hourly weather forecast for areas in Thailand",
  {
    lat: z.number().min(-90).max(90).describe("Latitude"),
    lon: z.number().min(-180).max(180).describe("Longitude"),
  },
  async ({ lat, lon }) => {
    const forecast = await tmdClient.getHourlyForecast(lat, lon);
    const reply = formatGetHourlyForecast(forecast);
    return {
      content: [
        {
          type: "text",
          text: reply,
        },
      ],
    };
  }
);

const main = async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Server running on stdio");
};

main().catch((error) => {
  console.error("Error starting server:", error);
  process.exit(1);
});
