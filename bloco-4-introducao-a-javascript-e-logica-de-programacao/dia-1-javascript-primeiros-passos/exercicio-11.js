let salary = 1500;
let INSS;
let IR;

//INSS
if(salary >= 5189.82){
    INSS = 570.88;
    console.log('INSS = ' + INSS);

}else if(salary >= 2594.93){
    INSS = (salary * 11) / 100;
    console.log('INSS = ' + INSS);

}else if(salary >= 1556.95){
    INSS = (salary * 9) / 100;
    console.log('INSS = ' + INSS);

}else{
    INSS = (salary * 8) / 100;
    console.log('INSS = ' + INSS);
}

let brute = salary - INSS;
console.log('Salário Bruto = ' + brute)


//IR
if(brute >= 4664,68){
    IR = [(brute * 27.5) / 100] - 869,36;
    console.log('IR = ' + IR);

}else if(brute >= 3751.06){
    IR = [(brute * 22.5) / 100] - 636.13;
    console.log('IR = ' + IR);

}else if(brute >= 2826.65){
    IR = [(brute * 15) / 100] - 354.8;
    console.log('IR = ' + IR);

}else if(brute >= 1903.99){
    IR = [(brute * 7.5) / 100] - 142.8;
    console.log('IR = ' + IR);

}else{
    IR = 0;
    console.log('IR = ' + IR);
}

let netSalary = salary - INSS - IR;


console.log('Salário líquido = ' + netSalary);