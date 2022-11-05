//문제 설명
//정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
  var answer = 0;
  var arr = n.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    answer = answer + parseInt(arr[i]);
  }

  return answer;
}
