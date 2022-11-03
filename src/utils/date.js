export const getPrevMonth = date => {
  const now = date.getMonth();
  const newDate = new Date(date);

  newDate.setMonth(now - 1);

  return newDate;
}

export const getNextMonth = date => {
  const now = date.getMonth();
  const newDate =  new Date(date);

  newDate.setMonth(now + 1);

  return newDate;
}

export const createDateKey = (date, type) => {

  if (type === 'key') {
    return (
      String(date.getFullYear()) +
      String(date.getMonth() + 1)
    );
  } else {
    return (
      String(date.getFullYear()) +
      String(date.getMonth() + 1) + 
      String(date.getDate() < 10 ? `0${date.getDate()}` : date.getDate())
    )
  }
};