function solution(num_list) {
    let even = 0; // 짝수 개수
    let odd = 0;  // 홀수 개수

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    return [even, odd];
}
