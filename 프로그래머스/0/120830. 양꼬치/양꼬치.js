function solution(n, k) {
    const yang = n*12000;
    const coke = k*2000;

    if(n>=10){
        return (yang + coke) - Math.floor(n / 10) * 2000; // n / 10을 내림 처리
    }else{return yang + coke}
}