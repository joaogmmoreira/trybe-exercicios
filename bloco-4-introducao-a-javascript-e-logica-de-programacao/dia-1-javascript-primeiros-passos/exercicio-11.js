let bruteSalary = 1200;
let INSS;
let IR;

//INSS
if(bruteSalary >= 5189.82){
    INSS = 570.88;
    console.log('Valor do INSS = ' + INSS);

}else if(bruteSalary >= 2594.93){
    INSS = (bruteSalary * 11) / 100;
    console.log('Valor do INSS = ' + INSS);

}else if(bruteSalary >= 1556.95){
    INSS = (bruteSalary * 9) / 100;
    console.log('Valor do INSS = ' + INSS);

}else{
    INSS = (bruteSalary * 8) / 100;
    console.log('Valor do INSS = ' + INSS);
}

let salaryMinusInss = bruteSalary - INSS;
console.log('Salário menos INSS = ' + salaryMinusInss)


//IR
if(salaryMinusInss >= 4664.68){
    IR = [(salaryMinusInss * 27.5) / 100] - 869.36;
    console.log('Valor do IR = ' + IR);

}else if(salaryMinusInss >= 3751.06){
    IR = [(salaryMinusInss * 22.5) / 100] - 636.13;
    console.log('Valor do IR = ' + IR);

}else if(salaryMinusInss >= 2826.65){
    IR = [(salaryMinusInss * 15) / 100] - 354.8;
    console.log('valor do IR = ' + IR);

}else if(salaryMinusInss >= 1903.99){
    IR = [(salaryMinusInss * 7.5) / 100] - 142.8;
    console.log('Valor do IR = ' + IR);

}else{
    IR = 0;
    console.log('Valor do IR = ' + IR);
}

let netSalary = bruteSalary - INSS - IR;


console.log('Salário líquido = ' + netSalary);