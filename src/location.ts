import "dotenv/config";
import { z } from "zod";
import type { AxiosStatic } from "axios";

const locationInfoSchema = z.object({
  lat: z.string(),
  lon: z.string(),
  display_name: z.string(),
});

export type LocationDataType = z.infer<typeof locationInfoSchema>;

const fetchLocationData = async (
  axios: AxiosStatic,
  apiUrl: string,
  locationName: string
): Promise<LocationDataType> => {
  const options = {
    method: "GET",
    url: apiUrl,
    params: {
      api_key: process.env.GEOCODE_API_KEY,
      q: locationName,
    },
  };
  const response = await axios.request(options);

  if (response.status === 200) {
    try {
      return locationInfoSchema.parse(response.data[0]);
    } catch (err) {
      console.error(err);
      throw new Error(`Unable to find location data for ${locationName}`);
    }
  } else {
    throw new Error("Failed to fetch location Data!");
  }
};

export { fetchLocationData };
