import "dotenv/config";
import { fetchLocationData, LocationDataType } from "./location";

const GEOCODE_API_URL = process.env.GEOCODE_API_URL as string;
const WEATHER_API_URL = process.env.WEATHER_API_URL as string;
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,rain&daily=temperature_2m_max,temperature_2m_min

const main = async (): Promise<number> => {
  if (process.argv.length !== 3) {
    console.error("Usage: weather <LOCATION>");
    return 1;
  }
  const location: string = process.argv[2] as string;

  let locationInfo: LocationDataType;
  try {
    locationInfo = await fetchLocationData(GEOCODE_API_URL, location);
  } catch (e) {
    console.error(e);
    return 1;
  }

  console.log(locationInfo);
  return await Promise.resolve(0);
};

main().catch((e) => console.error(e));
