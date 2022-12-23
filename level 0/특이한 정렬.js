function solution(numlist, n) {
  var answer = [];

  for (let i = 0; i < numlist.length; i++) {
    console.log(Math.abs(n - numlist[i]));
  }

  return answer;
}
