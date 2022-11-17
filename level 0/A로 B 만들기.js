//문제 설명
//문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(before, after) {
  var answer = 0;
  var arr = before.split("").sort().join("");
  var arr2 = after.split("").sort().join("");

  arr == arr2 ? (answer = 1) : (answer = 0);

  return answer;
}
