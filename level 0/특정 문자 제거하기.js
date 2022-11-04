//문제 설명
//문자열 my_string과 문자 letter이 매개변수로 주어집니다.
//my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, letter) {
  var answer = "";
  var arr = my_string.split("");
  var sum = [];
  const X = letter == letter.toUpperCase();
  const Y = letter == letter.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    if ((X || Y) && arr[i] !== letter) {
      sum.push(arr[i]);
    }
  }
  answer = sum.join("");

  return answer;
}
