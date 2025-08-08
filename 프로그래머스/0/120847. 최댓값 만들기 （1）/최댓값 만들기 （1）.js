function solution(numbers) {
    const max1 = Math.max(...numbers);
    const index = numbers.indexOf(max1);
    numbers.splice(index,1);
    const max2 = Math.max(...numbers);
    return max1*max2;
}