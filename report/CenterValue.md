### 코딩테스트 입문 - 중앙값 구하기

#### 문제 내용

-  정수 배열 `array`가 매개변수로 주어질 때 <br/>
	해당 배열의 중앙 값을 return하는 `solution` 함수 완성하기

``` js
//I/O 예시
array = [1, 2, 7, 10, 11]
result = 7

array = [9, -1, 0]
result = 0
```

---

### 구현 과정

- 첫 번째 테스트 케이스는 array의 각 요소가 오름차순으로 정렬된 상태지만 <br/>
	두 번째 테스트 케이스의 array의 각 요소는 정렬된 상태가 아니다.
- 일단 배열을 오름차순으로 정렬을 할 필요가 있다.

- `Array` 내장 함수인 `array.sort()` 함수를 사용해서 <br/>
	배열 요소를 오름차순으로 정렬을 해봤다.

``` js
function solution(array){
	const Arr = array.sort();

	var answer = 0;
	return answer;
}

solution([1, 2, 7, 10, 11]);
solution([9, -1, 0])
```

``` 
[1, 10, 11, 2, 7]
[-1, 0, 9]
```

- `array.sort()` 함수는 `compareFunction` 인자로 전달하지 않은 상태
- 배열 요소를 문자열로 변환하고, Unicode 포인트 순서대로 <br/>
	각 문자열을 비교하여 정렬한다.
- 우리가 원하는 형태는 아니기에 `array.sort()`에 `compareFunction` 추가해주자.
- `compareFunction` 전달되면 배열 요소는 `compare` 함수의 return 값에 따라 정렬된다.
- `a`와 `b`를 `compare` 함수의 인자로 전달했다고 가정
	- `return Value < 0` : `a`를 `b`보다 앞에 배치한다.
	- `return Value == 0` : `a`와 `b`의 위치를 그대로 둔다.
	- `return Value > 0` : `b`를 `a`보다 앞에 배치한다.

``` js
function Solution(array){
	const arr = array.sort((a, b) => {
		return (
			(a > b) ? 1
			: (a < b) ? -1
			: 0
		);
	});

	console.log(arr);
}

solution([1, 2, 7, 10, 11]);
solution([9, -1, 0]);
```

- `a > b`, `b`를 `a`보다 앞에 배치해야 한다. 숫자 1을 return 시킨다.
- `a < b` : `a`를 `b`보다 앞에 배치해야 한다. 숫자 -1을 return 시킨다.
- 앞의 두 조건 (`a > b`, `a < b`)에 해당이 안되는 경우 <br/>
	`a == b`인 경우라면 a와 b의 위치를 굳이 바꿀 필요가 없기에 <br/>
	숫자 0을 return시키게 한다.

```
[1, 2, 7, 10, 11]
[-1, 0, 9]
```

- `array` 배열 요소가 숫자 크기 순으로 정렬된 것을 확인하였다.
- 이제 배열 가운데 요소를 return하도록 코드를 작성해야 한다.

- 첫 번째 케이스에서는 2번 인덱스 요소를 <br/>
	두 번째는 1번 인덱스 요소를 가져와야 한다.

- 그냥 `array.length`를 2로 나누고 싶지만 <br/>
	안타깝게도 `array`에 전달되는 배열의 `length`는 홀수이기 때문에 <br/>
	아래와 같이 수식을 작성해주자. 
- `(array.length - 1) / 2`
- 위 수식의 결과 값은 임의의 변수에 저장해두자.

``` js
function Solution(array){
	const arr = array.sort((a, b) => {
		return (
			(a > b) ? 1
			: (a < b) ? -1
			: 0
		);
	});

	let centerIdx = (arr.length - 1) / 2;
	console.log(arr);
	console.log(centerIdx);
}

solution([1, 2, 7, 10, 11]);
solution([9, -1, 0]);
```

```
[1, 2, 7, 10, 11]
2
[-1, 0, 9]
1
```

- 각 배열의 중앙 값의 `index`도 얻었으니 이제 중앙 값 요소를 가져와 보자.
- 처음에는 `Array.find()` 사용해서 `centerIdx`와 동일한 값의 `index`인 <br/>
	배열 요소를 return하려고 했지만 두 번째 테스트 케이스에서 <br/>
	결과 값이 `undefined`가 발생되는 issue가 있었다.
- `Array.find()`의 return 값이 `undefined`가 나오는 경우라면 <br/>
	테스트 함수를 만족하는 값을 찾지 못했다는 것이다.
	
- 해당 문제를 구글링을 해본 결과, 다른 풀이 방법을 찾을 수 있었다.
- 그거를 참고해서 내 풀이에 적용, `undefined`가 나오는 문제가 해결되기는 했다.

``` js
function Solution(array){
	const arr = array.sort((a, b) => {
		return (
			(a > b) ? 1
			: (a < b) ? -1
			: 0
		);
	});

	let centerIdx = (arr.length - 1) / 2;

	var answer = arr[centerIdx];
	
	console.log(arr);
	console.log(answer);
}

solution([1, 2, 7, 10, 11]);
solution([9, -1, 0]);
```

```
[1, 2, 7, 10, 11]
중앙 값: 7

[-1, 0, 9]
중앙 값: 0
```

---

#### 번외

- 어떻게 문제를 푸는 데는 성공했지만, 뭔가 찝찝한 느낌이 들었다.
- 일단 어쩔 수 없다고 스스로에게 말하며 넘기고
- 문제 풀이 과정을 기록해두기 위해서 간단한 Report 쓰다가 <br/>
	혹시나 해서 기존 코드 (`array.find() 활용했던 코드`)를 조금 수정하고 <br/>
	제출을 해보니 정답 처리가 됐다.
- 전부 다는 아니지만 찝찝함이 조금 덜어진 것 같은 느낌이 들어서
	방금 제출했던 코드를 남겨두기로 했다.

``` js
function Solution(array){
	const arr = array.sort((a, b) => {
		return (
			(a > b) ? 1
			: (a < b) ? -1
			: 0
		);
	});

	//기존
	//var answer = arr[centerIdx];

	var answer = 0;
	//다른 형태로 풀이
	const getCenter = arr.find((elm, idx) => {
		if(idx == (arr.length - 1) / 2){
			answer = elm;
		}
	});
	
	console.log(arr);
	console.log(`중앙 값: ${answer}`);
}

solution([1, 2, 7, 10, 11]);
solution([9, -1, 0]);
```

```
[1, 2, 7, 10, 11]
중앙 값: 7
[-1, 0, 9]
중앙 값: 0
```

