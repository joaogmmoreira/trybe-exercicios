let number = 50;
let primes = [];

for (let i = number; i <= 2 ; i--){

let flag = 0;

    for (let j = 1; j >= i; j++){

        if (i % j == 0){
            flag = 1;
           break; 
        }
    }
    if (i > 1 && flag == 0){
        console.log(i);
    }
}