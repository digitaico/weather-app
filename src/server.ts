import http from "http";
import { weatherApp } from "./app";

const PORT = 3001;

http.createServer(weatherApp).listen(PORT, () => {
  console.log(`[ Server]: Running oon http://localhost:${PORT}`);
});
