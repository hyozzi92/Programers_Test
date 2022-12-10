// 머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

function solution(keyinput, board) {
  // 나의 위치
  const pos = [0, 0];
  // 방향 별 변화량
  const key = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };
  // 최대 이동 가능거리
  const wall = [(board[0] / 2) << 0, (board[1] / 2) << 0];
  keyinput.forEach((dir) => {
    // 벽을 만나지 않았다면 이동
    if (
      Math.abs(pos[0] + key[dir][0]) <= wall[0] &&
      Math.abs(pos[1] + key[dir][1]) <= wall[1]
    ) {
      pos[0] += key[dir][0];
      pos[1] += key[dir][1];
    }
  });
  return pos;
}
