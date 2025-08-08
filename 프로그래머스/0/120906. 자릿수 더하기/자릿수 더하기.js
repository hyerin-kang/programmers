function solution(n) {
    var answer = String(n).split("");
    let sum=0;
    for(let i=0; i<answer.length; i++){
        sum = sum + Number(answer[i]);
    }
    return sum;
}