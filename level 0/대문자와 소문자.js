//문제 설명
//문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
    var answer = '';
    var arr = my_string.split('')
    var sum = []
    console.log(arr)
    for(let i=0; i<arr.length; i++){
        if(arr[i]==arr[i].toLowerCase()){
            sum.push(arr[i].toUpperCase())
        } else if (arr[i] == arr[i].toUpperCase()){
            sum.push(arr[i].toLowerCase())
        }
    }
    answer = sum.join('')
    return answer;
}