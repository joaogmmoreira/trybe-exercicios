function highest (arr){
    let lowest = [0];
    let lowestIndex = [0];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < lowest){
            lowest = arr[i];
            lowestIndex = i;
        }
    }
    return console.log(lowestIndex + ' ' + lowest);
}

highest([2, 6, 7, 10, 1, 0, -3]);