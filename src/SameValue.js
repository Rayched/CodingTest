//최빈 값 구하기

function solution(array){
    const ArrFilter = array.filter(
        (item, idx) => array.indexOf(item !== idx)
    );

    console.log(ArrFilter);
    var answer = 0;
    console.log(answer);
    //return answer;
}

solution([1, 2, 3, 3, 3, 4]);
solution([1, 1, 2, 2]);
solution([1]);