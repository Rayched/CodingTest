//서울에서 김서방 찾기
/**
 * String형 배열 Seoul의 element 중 "Kim"의 위치 x를 찾아
 * "김 서방은 x에 있다."는 문자열을 반환하는 Solution 함수 완성하기
 * 
 * 배열 Seoul에 "Kim"이라는 값은 오직 하나만 존재하며
 * 잘못된 값이 입력되는 경우는 없다.
 */
/**
 * 입/출력 예시
 * Seoul = ["Jane", "Kim"]
 * Output = "김 서방은 1에 있다."
 */

function Solution(Seoul){
    let answer = "";
    let SeoulIdx = 0;

    const FindKim = Seoul.find((elm, idx) => {
        if (elm === "Kim"){
            SeoulIdx = idx;
            return elm;
        } else {
            return;
        }
    });

    if (FindKim === "Kim"){
        answer = `김 서방은 ${SeoulIdx}에 있다.`;
    }

    console.log(answer);
}

Solution(["Jane", "Kim"]);
Solution(["Kim", "Jane", "John"]);