export const saveInLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLS = key => {
  const savedData = localStorage.getItem(key);
  if (savedData) {
    return JSON.parse(savedData);
  }
  return null;
};
