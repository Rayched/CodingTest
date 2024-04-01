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

    /*
        * 최종 선별 실패한 코드
    if (den1 === den2){
        AnsNum = num1 + num2;
        AnsDen = den1;
    } else if(den1 !== den2 && den1 > den2 && den1 % den2 === 0){
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
    }*/

    //분모가 같은 경우와 다른 경우가 존재함
    if (den1 === den2){
        AnsNum = num1 + num2;
        AnsDen = den1;
    } else if (den1 !== den2 && den1 > den2 && den1 % den2 === 0){
        denSync = den1 / den2;
        AnsNum = num1 + (num2 * denSync);
        AnsDen = den1;
    } else if (den1 !== den2 && den1 < den2 && den2 % den1 === 0){
        denSync = den2 / den1;
        AnsNum = (num1 * denSync) + num2;
        AnsDen = den2;
    } else if (den1 !== den2){
        AnsNum = (num1 * den2) + (num2 * den1);
        AnsDen = den1 * den2;
    } else {
        return;
    }

    var answer = [AnsNum, AnsDen];
    console.log(answer);
    return answer;
}

Solution(1, 2, 3, 4);
Solution(9, 2, 1, 3);
//Solution(2, 5, 4, 5);