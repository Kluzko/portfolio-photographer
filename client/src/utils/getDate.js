export function getDate(oldDate) {
  const date = new Date(oldDate);
  const d = date.getDate();
  let m = date.getMonth() + 1;
  const y = date.getFullYear();
  if (m < 10) {
    m = "0" + m;
  }
  const covertedDate = `${d}/${m}/${y}`;
  return covertedDate;
}
