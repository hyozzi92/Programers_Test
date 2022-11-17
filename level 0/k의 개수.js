//문제 설명
//1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

function solution(i, j, k) {
  var answer = 0;

  sum = [];

  for (let a = i; a <= j; a++) {
    if (a < 10) {
      sum.push(a);
    } else if (a >= 10) {
      const arr = a.toString().split("");

      sum.push(...arr);
    }
  }
  answer = sum.filter((i) => {
    return i == k;
  }).length;

  return answer;
}
