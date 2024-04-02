//분수의 덧셈

/**
 * 첫번째 분수의 분자 num1, 분모 den1
 * 두번째 분수의 분자 num2, 분모 den2
 * 
 * 두 분수를 더한 값의 분자와 분모를 순서대로 담은 배열 return
 * 
 * 구현 순서
 * 1. 두 분수의 합을 먼저 구한다.
 * 2. 결과 값으로 얻은 분수에서 분자와 분모 간의 최대공배수를 구하고
 * 3. 구한 최대 공배수로 분자, 분모를 나누고
 * 4. 최종적으로 나온 값을 배열 answer에 저장해야한다.
 */

function solution(num1, den1, num2, den2){
    let sumNum = 0;
    let sumDen = 0;
    
    //분수의 합 계산
    if (den1 === den2){
        sumNum = num1 + num2;
        sumDen = den1;
    } else if (den1 !== den2){
        if (den1 > den2 && den1 % den2 === 0){
            let quo = den1 / den2;
            sumNum = num1 + (num2 * quo);
            sumDen = den1;
        } else if (den1 < den2 && den2 % den1 === 0){
            let quo = den2 / den1;
            sumNum = (num1 * quo) + num2;
            sumDen = den2;
        } else {
            sumNum = (num1 * den2) + (num2 * den1);
            sumDen = den1 * den2;
        }
    } 
    
    let GCD = 1;
    
    for (let i = 2; i <= Math.min(sumNum, sumDen); i++){
        if (sumNum % i === 0 && sumDen % i === 0){
            GCD = i;
        }
    }

    let ansNum = sumNum / GCD;
    let ansDen = sumDen / GCD;

    var answer = [ansNum, ansDen];
    console.log(answer);
    
    return answer;
}

solution(1, 2, 3, 4);
solution(9, 2, 1, 3);
