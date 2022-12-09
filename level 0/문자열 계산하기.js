//my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

function solution(my_string) {
  var answer = 0;

  var arr = my_string.split(" ");
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      answer += parseInt(arr[i]);
    } else if (isNaN(arr[i]) && arr[i] == "+") {
      answer = answer + parseInt(arr[i + 1]);
      i++;
    } else if (isNaN(arr[i]) && arr[i] == "-") {
      answer = answer - parseInt(arr[i + 1]);
      i++;
    }
  }

  return answer;
}
