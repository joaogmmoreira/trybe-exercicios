function highest (arr){
    let largest = [0];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }
    }
    return(console.log(largest));
}

highest([2, 3, 6, 7, 10, 1]);
