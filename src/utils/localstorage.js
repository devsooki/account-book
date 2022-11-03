export const saveLocalStorage = (keyName, value) => {
  const data = localStorage.getItem(keyName)


  if (!data || data === null) {
    localStorage.setItem(keyName, JSON.stringify([value]))
  } else {
    let newArray = JSON.parse(data).concat(value)
    localStorage.setItem(keyName, JSON.stringify(newArray))
  }
};

export const loadLocalStorage = (keyName) => {
  const data = localStorage.getItem(keyName);

  if (!data || data === null) {
    return null;
  }

  return JSON.parse(data);
};