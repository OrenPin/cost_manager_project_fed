// Eylam Kadden 206516957
// Oren Pinhasov 318552734
// Save data to local storage using async method
export const saveData = async (key, value) => {
  let newCosts = await getData(key);
  newCosts = newCosts.concat(value)
  localStorage.setItem(key, JSON.stringify(newCosts));
};

// Get data from local storage using async method
export const getData = async (key) => {
  return new Promise((resolve, reject) => {
    try {
      let data = localStorage.getItem(key);
      resolve(JSON.parse(data) || []);
    } catch (error) {
      reject("No data found");
    }
  });
};

