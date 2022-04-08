let array = ['java', 'javascript', 'python', 'html', 'css'];
let longestWord = '';

for (let i = 0; i < array.length; i++){
    if (longestWord.length < array[i].length){
        longestWord = array[i];
    }
}
console.log(longestWord);