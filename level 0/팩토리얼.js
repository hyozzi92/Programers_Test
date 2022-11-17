//문제 설명
//i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 
//예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
    var answer = 0;
    sum=1
    sum2=[]
    for(let i=1; i<=10; i++){
       sum= sum* i
        sum2.push(sum)
    } 
    
    sum3 = []
    for(let j=0; j<=sum2.length; j++){
        if(n>=sum2[j]){
            sum3.push(sum2[j])
        }
    }
    
    answer = sum3.indexOf(Math.max(...sum3))+1
    return answer;
}