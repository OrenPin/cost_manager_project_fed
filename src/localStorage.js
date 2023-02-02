export const saveData = async (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getData = async key => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  };