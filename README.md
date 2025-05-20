# tmd-mcp-server

`tmd-mcp-server` is an MCP (Model Context Protocol) server for
retrieving weather data from the Thai Meteorological Department (TMD).

## What is an MCP Server?

An MCP server implements the Model Context Protocol, which is
a protocol designed to provide LLM's access to up-to-date data.

To learn more about the Model Context Protocol, visit the
[official MCP website](https://modelcontextprotocol.info).

## Features

- Fetches hourly weather forecast for a given area.

## Building

Run the build command.

```sh
npm run build
```

Configure your MCP client to access the MCP server.
For example, [Claude](https://modelcontextprotocol.info/docs/quickstart/server/).
