function solution(my_string, alp) {
    //console.log([...my_string].includes(alp))
    const answer = [...my_string].map(function(list){
        if(list == alp){
            return list.toUpperCase();
        }
        return list
    })
    return answer.join('')
}