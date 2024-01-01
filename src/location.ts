import "dotenv/config";
import axios from "axios";

interface LocationDataType {
  lat: string;
  lon: string;
  display_name: string;
}

const fetchLocationData = async (
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
  const response = await axios.request<LocationDataType[]>(options);

  if (response.status === 200) {
    if (response.data.length > 0) {
      return response.data[0];
    } else {
      throw new Error(`Unable to find location data for ${locationName}`);
    }
  } else {
    throw new Error("Failed to fetch location Data!");
  }
};

export { LocationDataType, fetchLocationData };
