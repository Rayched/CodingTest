//코딩테스트 입문 - 피자 나눠먹기 (1)

function solution(n){
    var answer = 0;

    if (n >= 1 && n <= 7){
        answer = 1;
    } else if (n > 7){
        let a = Math.trunc(n / 7);
        if (n % 7 == 0){
            answer = a;
        } else {
            answer = a + 1;
        }
    }
    //return answer;
    console.log(answer);
}

for (let i = 1; i <= 100; i++){
    solution(i);
}