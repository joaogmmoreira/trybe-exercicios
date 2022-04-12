function repeat (arr){
    var repeatedNumbers = [];
    for (let i = 0; i <= arr.length; i ++){
        for (let j = 0; j <= arr.length; j ++){
            if (arr[i] === arr[j]){
                
                
                repeatedNumbers.push(arr[i]);
                
            }
        }
    }
    return console.log(repeatedNumbers);
    
}


repeat ([2, 3, 2, 5, 8, 2, 3]);