const useFormatToMb = (fileSize) => {
  //1 Mb in bytes
  const Mb = 1048576;
  const converted = Math.round(fileSize / Mb);

  return converted;
};

export default useFormatToMb;
