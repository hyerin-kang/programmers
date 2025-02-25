function solution(a, b) {
  let total = 0;
  for (let index = 0; index < a.length; index++) {
    total += a[index] * b[index];
  }
  return total;
}