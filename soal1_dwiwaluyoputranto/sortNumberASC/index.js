// 2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,
const sortNumberASC = (array) => {
  if (typeof array !== "object") return "0";

  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return "diurutkan secara ascending: ", array;
};
module.exports = sortNumberASC;
