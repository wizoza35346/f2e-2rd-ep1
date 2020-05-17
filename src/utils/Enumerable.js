export const range = (startIndex, range) => {
  if (range === 0) return [];
  return Array(range)
    .join(',')
    .split(',')
    .map((i) => startIndex++);
};
