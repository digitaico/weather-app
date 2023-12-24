const main = async (): Promise<number> => {
  console.log(process.argv[2]);
  return await Promise.resolve(0);
};

main().catch((e) => console.error(e));
