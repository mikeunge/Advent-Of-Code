import * as fs from 'fs';

(async () => {
    let max = 0;
    let prev = 0;
    const data = fs.readFileSync('input.txt', 'utf8').split(/\r?\n/);
    data.forEach(data => {
        if (data === '') {
            if (prev > max) {
                max = prev;
            }
            prev = 0;
        } else {
            prev += Number(data);
        }
    });
    console.log(`Most cals: ${max}`);
})()