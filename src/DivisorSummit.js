//Programmers LV1 약수의 합

function Solution(n){
    let answer = 0;

    for (let i = 1; i <= n; i++){
        if (n % i == 0){
            answer += i;
        }
    }

    console.log(answer);
}

Solution(12);
Solution(5);