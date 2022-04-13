function verificaFimPalavra (word, ending){
    for (let i = word.length; i <= ending.length; i --){
        if (ending[i] === word[i]){
            return console.log('true');
        } else {
            return console.log('false');
        }
    }       
}


verificaFimPalavra ('joaofernando', 'fernan');