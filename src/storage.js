const MAX_LIST_LENGTH = 100; //list 최대 길이

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

/** 새로운 Item을 storage에 추가 */
export const addItemStorage = (key, value) => {
  const list = getStorage(key, []);

  //저장 가능한 길이 제한
  if (list.length >= MAX_LIST_LENGTH) {
    throw new Error(`${MAX_LIST_LENGTH}개까지만 입력 가능합니다.`);
  }

  try {
    storage.setItem(key, JSON.stringify([...list, value]));
  } catch (error) {
    console.log(error);
  }
};

/** deleteId에 해당하는 item 삭제 */
export const removeItemStorage = (key, deleteId) => {
  const list = getStorage(key, []);
  try {
    storage.setItem(key, JSON.stringify(list.filter((item) => item.id !== deleteId)));
  } catch (error) {
    console.log(error);
  }
};

/** 해당하는 Item check여부 업데이트 */
export const setItemStorage = (key, todo) => {
  const list = getStorage(key, []);
  const items = list.map((item) => (item.id !== todo.id ? item : { ...item, isChecked: !todo.isChecked }));
  try {
    storage.setItem(key, JSON.stringify(items));
  } catch (error) {
    console.log(error);
  }
};
