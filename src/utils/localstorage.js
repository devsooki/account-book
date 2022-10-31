export const saveLocalStorage = (keyName, value) => {
  localStorage.setItem(keyName, JSON.stringify(value));
};

export const loadLocalStorage = (keyName) => {
  const data = localStorage.getItem(keyName);

  if (!data || data === null) {
    return null;
  }

  return JSON.parse(data);
};