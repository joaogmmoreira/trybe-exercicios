const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (arr1, arr2) => {
  let points = 0;
  for (let index = 0; index < arr1.length; index += 1) {
    if (arr1[index] === arr2[index]){
      points = points + 1;
    } if (arr1[index] === 'N.A') {
      points = points + 0;
    }
      points = points - 0.5;
  };
  return points;
};
// console.log(compareAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS))

const result = (arr1, arr2, callback) => {
  callback(arr1, arr2);
};
console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers))
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const compareAnswers = (rightAnswer, studentAnswer) => {
//   if (rightAnswer === studentAnswer) {
//     return 1;
//   } if (studentAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// };

// const countPoints = (rightAnswers, studentAnswers, action) => {
//   let contador = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//     contador += actionReturn;
//   }
//   return `Resultado final: ${contador} pontos`;
// };

// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));