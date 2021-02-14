export function getDescription(str, maxLen, separator = " ") {
  // it removes all image in description , header === chars, videos and ul lisiting and removes white space
  const regex = /=|&#x27;|!\[(.*?)] \((https?:\/\/\S+\.\w+)\)|-|[1-9]|^\s+|\s+$|\s+(?=\s)/gi;

  if (str.length <= maxLen) return str.replace(regex, "");
  const descValue = str.substr(0, str.lastIndexOf(separator, maxLen));
  return descValue.replace(regex, "");
}
