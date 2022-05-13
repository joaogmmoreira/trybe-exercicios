const sorteio = (number, func) => {
  const lotteryNumber = Math.floor((Math.random() * 5) + 1);
  const myLuckyNumber = Math.floor((Math.random() * 5) + 1);
  if (func(myLuckyNumber, lotteryNumber) === true) {
    return 'lucky as hell';
  }
  return 'not today';
  
}


const checkLottery = (myLuckyNumber, number) => {
  if (myLuckyNumber === number) {
    return true
  }
  return false
}

console.log(sorteio(4, checkLottery))