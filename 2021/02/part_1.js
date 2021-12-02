const fs = require('fs');

fs.readFile('input.txt', 'utf8' , (_, data) => {
  let depth = 0;
  let horizontal = 0;
  data.split('\n').forEach((next_move) => {
      move = next_move.split(' ');
      if (move[0] === 'up') {
        depth -= parseInt(move[1]);
      } else if (move[0] === 'down') {
        depth += parseInt(move[1]);
      } else if (move[0] === 'forward') {
        horizontal += parseInt(move[1]);
      } else {
        console.log(`Move ${move[0]} is not a known command`);
      }
  });
  let total = depth * horizontal;
  console.log(`Total: ${total}`);
});
