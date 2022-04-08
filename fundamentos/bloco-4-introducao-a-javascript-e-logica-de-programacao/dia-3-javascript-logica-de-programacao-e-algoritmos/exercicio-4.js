number = 50;
primeNumbers = [];

for (let i = number; i <= 1; i--){
    for (let j = 0; j >= i; j++){
        if (i % j == 0){
            primeNumbers.push(i);
        }
    }
}
console.log(primeNumbers);




/*switch (j){
    case i % j === 0 && j === 2:
    break;*/