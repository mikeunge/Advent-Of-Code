const fs = require('fs');

fs.readFile('input.txt', 'utf8' , (_, data) => {
  let prev_depth = -1;
  let total = -1; // start with -1 cause the first entry doesn't count
  let ser_data = data.split('\n')
  for (let i = 0; i <= ser_data.length; i++) {
    // check for null and empty strings
    if (ser_data[i] == null || ser_data[i] == '' || ser_data[i+1] == null || ser_data[i+1] == '' || ser_data[i+2] == null || ser_data[i+2] == '') {
      console.log('Not enough data');
      break;
    }
    let cur_depth = parseInt(ser_data[i]) + parseInt(ser_data[i+1]) + parseInt(ser_data[i+2]);
    console.log(cur_depth, ser_data[i], ser_data[i+1], ser_data[i+2]);
    if (cur_depth > prev_depth) {
      ++total;
    }
    prev_depth = cur_depth;
  }
  console.log(`Total: ${total}`);
});