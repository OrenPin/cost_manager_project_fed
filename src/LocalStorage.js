// Save data to local storage using async method
export const saveData = async (key, value) => {
  let newCosts = await getData(key);
  newCosts = newCosts.concat(value)
  localStorage.setItem(key, JSON.stringify(newCosts));
};

// Get data from local storage using async method
export const getData = async (key) => {
  let data = localStorage.getItem(key);
  return JSON.parse(data) || [];
};

