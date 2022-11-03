//문제 설명
//정수 배열 numbers가 매개변수로 주어집니다.
//numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = 0;
  sum = [];
  for (let i = 1; i < numbers.length; i++) {
    sum.push(numbers[i] * numbers[i - 1]);
  }
  answer = Math.max(...sum);
  return answer;
}
