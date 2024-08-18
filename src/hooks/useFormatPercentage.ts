export const useFormatPercentage = (
  decimalNumber: number,
  precision: number = 0
): string => {
  const formattedNumber = decimalNumber.toFixed(precision);
  return formattedNumber;
};
