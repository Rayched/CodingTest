//중앙 값 구하기
/**
 * number 배열 array가 매개변수로 주어질 때
 * 해당 배열의 중앙 값을 return하는 solution 함수 완성하기
 * 
 * array.length = 홀수
 * 0 < array.length < 100
 */

function solution(array){
    var answer = 0;

    const Arr = array.sort((a, b) => {
        return (
            (a > b) ? 1
            : (a < b) ? -1
            : 0
        )
    });

    //var answer = Arr[centerIdx];
    //좋은 해결 방법이지만
    //내 힘으로 해결한 느낌이 들지 않아서
    //조금 찝찝하다.

    //다른 사람의 풀이법을 참고
    let getCenter = Arr.find((elm, idx, arr) => {
        if (idx === (arr.length - 1) / 2){
            answer = elm;
        }
    })

    console.log(Arr);
    console.log(`중앙 값: ${answer}`);
}

solution([1, 2, 7, 10, 11]); //중앙 값: 7
solution([9, -1, 0]); //중앙 값: 0
