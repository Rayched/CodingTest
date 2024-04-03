//중앙 값 구하기
/**
 * number 배열 array가 매개변수로 주어질 때
 * 해당 배열의 중앙 값을 return하는 solution 함수 완성하기
 * 
 * array.length = 홀수
 * 0 < array.length < 100
 */

function solution(array){
    let Arr = array.sort((a, b) => {
        return (
            (a > b) ? 1 
            : (a < b) ? -1 
            : 0
        )
    });

    let centerIndex = (Arr.length - 1) / 2;

    var answer = Arr[centerIndex];

    console.log(Arr);
    console.log(answer);
}

solution([1, 2, 7, 10, 11]); //중앙 값: 7
solution([9, -1, 0]); //중앙 값: 0
