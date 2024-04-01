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

function Solution(num1, den1, num2, den2){
    //분수 두 개의 합 구하기
    let SumNum = 0;
    let SumDen = 0;

    if (den1 == den2){
        SumNum = (num1 * den2) + (num1 * den1);
        SumDen = den1;
    } else if (den1 != den2){
        if (den1 > den2 && den1 % den2 == 0){
            let denSync = den1 / den2;
            SumNum = num1 + (num2 * denSync);
            SumDen = den1;
        } else if (den1 < den2 && den2 % den1 == 0){
            let denSync = den2 / den1;
            SumNum = (num1 * denSync) + num2;
            SumDen = den2;
        } else {
            SumNum = (num1 * den2) + (num2 * den1);
            SumDen = den1 * den2;
        }
    }
    //결과 값의 분자, 분모 간의 최대공약수 구하기
    

    //최종 결과물 저장
    let ansNum = 0;
    let ansDen = 0;

    var answer = [ansNum, ansDen];
    console.log(answer);
    return answer;
}

Solution(1, 2, 3, 4);
Solution(9, 2, 1, 3);
//Solution(2, 5, 4, 5);