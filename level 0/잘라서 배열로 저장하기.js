//문제 설명
//문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  var answer = [];
  var arr = my_str.split("");

  // var arr2= arr.map((x,i)=>{ return  arr.splice(i*0,n).join('')})
  // answer = arr2.filter((x)=>{return x.length>=1})
  // console.log(arr2)
  var a = Math.ceil(arr.length / n);
  for (let i = 0; i < a; i++) {
    answer.push(arr.splice(i * 0, n).join(""));
  }

  return answer;
}
