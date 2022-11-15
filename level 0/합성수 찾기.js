//문제 설명
//약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  var answer = 0;
  var arr = [0, 2, 3, 5, 7];
  sum = [];

  for (let i = 0; i <= n; i++) {
    if ((i % 2 == 0) | (i % 3 == 0) | (i % 5 == 0) | (i % 7 == 0)) {
      sum.push(i);
    }
  }

  var arr2 = sum.filter((x) => !arr.includes(x));

  answer = arr2.length;
  return answer;
}
