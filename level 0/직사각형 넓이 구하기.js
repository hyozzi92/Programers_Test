//문제 설명
//2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
  // 가장 큰 x의 값 - 가장 작은 x의 값 = 가로 길이
  const width =
    Math.max(...dots.map((a) => a[0])) - Math.min(...dots.map((a) => a[0]));
  // 가장 큰 y의 값 - 가장 작은 y의 값 = 세로 길이
  const height =
    Math.max(...dots.map((a) => a[1])) - Math.min(...dots.map((a) => a[1]));
  // 넓이 반환
  return width * height;
}
