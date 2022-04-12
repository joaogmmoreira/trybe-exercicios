function checkPalindrome(word){
    if (word.split('').reverse().join() === word.split('').join()){
        console.log('True');
    }else{
        console.log('False');
    }

}

checkPalindrome('arara');
checkPalindrome('desenvolvimento');