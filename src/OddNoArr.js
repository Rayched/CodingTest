//코딩테스트 입문 - 짝수는 싫어요

function solution(n){
    const arr = [];

    for (let i = 1; i <= n; i++){
        if(i % 2 === 1){
            arr.push(i);
        }
    }

    var answer = arr.sort((a, b) => {
        return (
            (a > b) ? 1
            : (a < b) ? -1
            : 0
        );
    });

    console.log(answer);
    return answer;
}

solution(10);
solution(15);