const GEOCODE_API_URL = "https://geocode.maps.co/search";

const main = async (): Promise<number> => {
  if (process.argv.length !== 3) {
    console.error("Usage: weather <LOCATION>");
    return 1;
  }
  const location = process.argv[2];

  return await Promise.resolve(0);
};

main().catch((e) => console.error(e));
