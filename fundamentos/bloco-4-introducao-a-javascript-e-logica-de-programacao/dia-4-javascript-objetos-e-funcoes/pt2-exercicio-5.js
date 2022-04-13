//INCOMPLETO

function repeat (arr){
    var repeatedNumbers = [];
    for (let i = 0; i <= arr.length; i ++){
        if (arr[i] !== repeatedNumbers){
            repeatedNumbers = arr[i];
            
        }
    }
    console.log(arr);
    return console.log(arr);
}


repeat ([2, 3, 2, 5, 8, 2, 3, 3, 3, 3]);