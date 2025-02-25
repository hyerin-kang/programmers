function solution(price, money, count) {
  //price : 원래가격 , count : 이용횟수 , money : 내가가진돈

  //누적이용금가격
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result = result + price * i;
  }
  if (money < result) {
    return result - money;
  } else {
    return 0;
  }
}