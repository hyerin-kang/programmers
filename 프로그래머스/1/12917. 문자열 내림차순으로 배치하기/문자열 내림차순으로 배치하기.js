function solution(s) {
  let answer = s.split("");
  answer.sort(function (a, b) {
    return b.charCodeAt(0) - a.charCodeAt(0);
  });
  return answer.join("");
}
console.log(solution("Zbcdefg"));