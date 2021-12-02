const fs = require('fs');

fs.readFile('input.txt', 'utf8' , (_, data) => {
  let aim = 0;
  let depth = 0;
  let horizontal = 0;
  data.split('\n').forEach((next_move) => {
      move = next_move.split(' ');
      if (move[0] === 'up') {
        aim -= parseInt(move[1]);
      } else if (move[0] === 'down') {
        aim +=  parseInt(move[1]);
      } else if (move[0] === 'forward') {
        horizontal += parseInt(move[1]);
        depth += parseInt(move[1]) * aim;
      } else {
        console.log(`Move ${move[0]} is not a known command`);
      }
  });
  let total = depth * horizontal;
  console.log(`Total: ${total}`);
});
