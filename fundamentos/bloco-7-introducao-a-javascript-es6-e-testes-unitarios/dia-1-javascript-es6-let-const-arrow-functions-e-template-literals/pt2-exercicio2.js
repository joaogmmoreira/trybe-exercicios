const longestWord = (string) => {
  const arr = string.split(' ');
  let maxLength = 0;
  let longest = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength);
      longest = arr[i];
      maxLength = arr[i].length;  
  } 
  console.log (longest);
  return longest;
}
  

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'