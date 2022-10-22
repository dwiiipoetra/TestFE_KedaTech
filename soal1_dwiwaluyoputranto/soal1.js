// const sortNumberDESC = (array) => {
//   let temp = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] < array[j]) {
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   return array;
// };

// console.log("diurutkan secara descending: ", sortNumberDESC(array));
// sortNumberDESC(array);

// 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false
// function palindrom(string) {
//   let reverseString = [...string].reverse().join("");
//   string === reverseString ? console.log(true) : console.log(false);
// }
// palindrom("katak");
// palindrom("rubah");
