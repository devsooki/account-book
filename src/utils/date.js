export const createDateKey = date => {
  return (
    String(date.getFullYear()) +
    String(date.getMonth() + 1) +
    String(date.getDate() < 10 ? `0${date.getDate()}` : date.getDate())
  );
};