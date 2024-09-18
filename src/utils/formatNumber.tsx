export default function formatNumberWithSpace(number: number): string {
  const numStr = number.toString();

  return numStr.replace(/\B(?=(\d{3})$)/, " ");
}
