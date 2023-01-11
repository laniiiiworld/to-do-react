export const storage = localStorage;

/** storage에서 가져오기 */
export const getStorage = (key, defaultValue) => {
  try {
    const value = storage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  } catch (error) {
    return defaultValue;
  }
};

/** storage에 저장 */
export const setStorage = (key, value) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};
