export const saveData = async (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export const getData = async key => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };