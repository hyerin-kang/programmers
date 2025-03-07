function solution(myString, pat) {
    const change = [...myString].map(function(list){
         return list === 'A' ? 'B' : 'A' // A를 B로, B를 A로 변환
    }).join('');
    if(change.includes(pat)){
        return 1
    }else{
        return 0
    }
}