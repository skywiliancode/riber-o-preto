
const listReverse = (caracter) => {
  caracter.split("");
  let len = caracter.length - 1;
  let caracterReverse = [];

  for (let i = 0; i < caracter.length; i++) {
    caracterReverse.push(caracter[len]);
    len--;
  }
  return caracterReverse.join("");
}

console.log(listReverse('naruto'))
