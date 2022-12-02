import * as fs from "fs";

const part1 = async (data: string[]): Promise<number> => {
  let [res, prev] = [0, 0];
  data.forEach((data) => {
    if (data === "") {
      if (prev > res) res = prev;
      prev = 0;
    } else {
      prev += Number(data);
    }
  });
  return res;
};

const part2 = async (data: string[]): Promise<number> => {
  let prev = 0;
  const arr: number[] = [];

  data.forEach((data) => {
    if (data === "") {
      arr.push(prev);
      prev = 0;
    } else {
      prev += Number(data);
    }
  });

  return arr
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((sum, a) => sum + a, 0);
};

(async () => {
  const data = fs.readFileSync("input.txt", "utf8").split(/\r?\n/);
  const [p1, p2] = await Promise.all([part1(data), part2(data)]);
  console.log(`[1] Most callories: ${p1}`);
  console.log(`[2] Most callories (1-3 combined): ${p2}`);
})();
