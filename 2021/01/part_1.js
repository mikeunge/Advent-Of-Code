const fs = require('fs');

fs.readFile('input.txt', 'utf8' , (_, data) => {
  let prev_depth = -1;
  let total = 0;
  data.split('\n').forEach((depth) => {
      if (depth > prev_depth) {
          ++total;
      }
      prev_depth = depth;
  });
  console.log(`Total: ${total}`);
});
