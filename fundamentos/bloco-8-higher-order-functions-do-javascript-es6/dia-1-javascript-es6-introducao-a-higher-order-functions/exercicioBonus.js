const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const minDmg = 15;
  const dragonDmg = Math.floor((Math.random() * (dragon.strength - minDmg + 1) + minDmg));
  return  dragonDmg;
};
// console.log(dragonDamage());

const warriorDamage = () => {
  const minDmg = 45;
  const mageDmg = Math.floor((Math.random() * ((minDmg * 2) - minDmg + 1) + minDmg));
  return  mageDmg;
};
// console.log(warriorDamage());

const mageDamage = () => {
  const minDmg = 45;
  const warriorDmg = Math.floor((Math.random() * ((warrior.strength * warrior.weaponDmg) - minDmg + 1) + minDmg));
  return  warriorDmg;
};