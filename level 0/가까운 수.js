//문제 설명
//정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
  var answer = 0;
  const minDiff = Math.min(...array.map((a) => Math.abs(a - n)));

  return array.sort((a, b) => a - b).find((a) => Math.abs(a - n) === minDiff);

  return answer;
}
