function characters ([names]){

    let mostCharacters = ['b'];
    let words = ['a'];

    for (let i = 0; i <= names.length; i ++){
        
        if(mostCharacters.length >= names[i].split('')){
            mostCharacters = names[i].split('');                        
            mostCharacters.join();
        }
    }
    return console.log(mostCharacters);
}

characters (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);