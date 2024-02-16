
## 📔 Reference

- **[약수의 합 / Programmers](https://school.programmers.co.kr/learn/courses/30/lessons/12928)**

---

#### 문제 설명

- 정수 `n` 입력 받아서, n의 약수를 모두 더한 값을 반환하는 `Solution` 함수 완성하기

| n | return |
| ---- | ---- |
| 12 | 28 |
| 5 | 6 |

- `n = 12`, 12의 약수는 1, 2, 3, 4, 6, 12이고, 이를 모두 더한 값은 28이다.
- `n = 5`, 5의 약수는 1, 5이고, 이를 모두 더한 값은 6이다.

---

#### 💻 풀이 과정

- 어떤 정수를 나눌 때, 나머지 없이 딱 떨어지는 정수를 '**약수**'라 한다.

``` js
function Solution(n){
	let answer = 0;
	for (let i = 1; i <= n; i++){
		if (n % i == 0){
			answer += i;
		}
	}
	
	return answer;
}

Solution(12); //28
Solution(5); //6
```

```
1. 변수 n의 값에 변수 i의 값을 나눈다. (초기 값: i = 1)
2. n에 i를 나눈 후 나머지가 0이 되는 값을 변수 answer에 저장
	(아닌 경우에는 저장하지 않고 넘긴다.)
3. 이후 i의 값을 1 올리고, 다시 n과 i를 나누고 나머지가 0이 되는 값은
	변수 answer에 저장한다.
4. 단, 우리가 구해야 하는 것은 약수의 합이기 때문에
	변수 answer의 현재 값과 i의 현재 값을 합하고
	이후의 결과 값을 다시 변수 answer에 저장한다.
	(answer += i) => (answer = answer + i)
5. 이하의 과정을 (i <= n == false)가 될 때까지 반복한다.
6. 'i <= n'이 false가 되어 for 문을 빠져나오고 나서
	변수 answer의 현재 값을 return한다.
```

