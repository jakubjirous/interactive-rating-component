/**
 * Validate if input falls within specific ranges
 * @param input
 * @param min
 * @param max
 */
export const validateRange = (
  input: string | null,
  min = 0,
  max = 5
): number => {
  if (input === null) {
    return 0;
  }

  const parsedInput = parseFloat(input);
  if (Number.isNaN(parsedInput)) {
    return 0;
  }
  if (parsedInput < min || parsedInput > max) {
    return 0;
  }
  return parsedInput;
};
