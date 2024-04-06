function isFibonacciNumber(num, a = 0, b = 1) {
  if (num === a || num === 0) {
    return true;
  } else if (a > num) {
    return false;
  }
  return isFibonacciNumber(num, b, a + b);
}

const numero = 21;
isFibonacciNumber ? console.log("pertence à sequência") : console.log("não pertence à sequência")

