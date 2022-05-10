const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortArr = (arr) => {
  const newArr = arr.sort((a, b) => a - b);
  console.log(newArr);
  return newArr;
}

sortArr(oddsAndEvens);
// console.log(oddsAndEvens); // será necessário alterar essa linha 😉