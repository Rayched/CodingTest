//분수의 덧셈

/**
 * 첫번째 분수의 분자 num1, 분모 den1
 * 두번째 분수의 분자 num2, 분모 den2
 * 
 * 두 분수를 더한 값의 분자와 분모를 순서대로 담은 배열 return
 */

function Solution(num1, den1, num2, den2){
    let AnsNum = 0;
    let AnsDen = 0;
    let denSync = 0;

    //분모가 같은 경우
    if (den1 === den2){
        AnsNum = num1 + num2;
        AnsDen = den1;
    } else if(den1 !== den2 && den1 > den2 && den1 % den2 === 0){
        //분모가 다른 경우
        /**
         * 1. den1이 den2의 배수인 경우
         * 2. den2가 den1의 배수인 경우
         * 3. 단순히 den1과 den2가 다르기만 한 경우
         */

        if (den1 > den2 && den1 % den2 == 0){
            denSync = den1 / den2;
            AnsNum = num1 + (num2 * denSync);
            AnsDen = den1;
        } else if (den1 < den2 && den2 % den1 == 0){
            denSync = den2 / den1;
            AnsNum = (num1 * denSync) + num2;
            AnsDen = den2;
        } else {
            AnsNum = (num1 * den2) + (num2 * den1);
            AnsDen = den1 * den2;
        }
    }

    var answer = [AnsNum, AnsDen];
    console.log(answer);
    return answer;
}

Solution(1, 2, 3, 4);
Solution(9, 2, 1, 3);
//Solution(2, 5, 4, 5);