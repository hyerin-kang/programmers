const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const [a, b] = input.map(Number); // 입력 받은 문자열을 공백 기준으로 나누고 숫자로 변환
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);

});