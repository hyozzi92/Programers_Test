//문제 설명
//문자열 my_string과 정수 n이 매개변수로 주어질 때,
//my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, n) {
  var answer = "";
  var arr = my_string.split("");
  sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < n; j++) {
      sum.push(arr[i]);
    }
  }
  answer = sum.join("");
  return answer;
}
