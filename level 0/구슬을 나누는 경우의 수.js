//머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
//머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
//balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

function solution(balls, share) {
  var answer = 0;
  var sum1 = BigInt(1);
  var sum2 = BigInt(1);
  var sum3 = BigInt(1);
  for (let i = 1; i <= balls; i++) {
    sum1 = sum1 * BigInt(i);
  }

  for (let j = 1; j <= balls - share; j++) {
    sum2 = sum2 * BigInt(j);
  }
  for (let k = 1; k <= share; k++) {
    sum3 = sum3 * BigInt(k);
  }
  var pultiple = sum2 * sum3;
  console.log(sum1);
  console.log(sum2);
  console.log(sum3);
  console.log(sum1 / pultiple, "곱");
  answer = sum1 / (sum2 * sum3);
  console.log(answer);
  return answer;
}
