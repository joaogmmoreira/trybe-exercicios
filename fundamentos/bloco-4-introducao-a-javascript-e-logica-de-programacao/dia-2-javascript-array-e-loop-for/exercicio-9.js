//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

numbers = [];

for (let i = 0; i <= 25; i++){
    if (numbers.length <= 25){
        numbers.push(i);
    }
}
for (let j = 0; j < numbers.length; j++){
    console.log(numbers[j] / 2);
}