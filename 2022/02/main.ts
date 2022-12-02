import * as fs from "fs";

/* RPS - listing
 *
 * A/X => Rock (1pts)
 * B/Y => Paper (2pts)
 * C/Z => Scissor (3pts)
 *
 * Win: +6pts
 * Draw: +3pts
 * Loose: +0pts
 */

const checkOutcome = (opponent: string, player: string): number => {
  let pts = 0;
  if (player === "X") pts = 1;
  else if (player === "Y") pts = 2;
  else pts = 3;

  let win = false;
  let draw = false;
  if (opponent === "A") {
    if (player === "X") draw = true;
    else if (player === "Y") win = true;
  } else if (opponent === "B") {
    if (player === "Y") draw = true;
    else if (player === "Z") win = true;
  } else {
    if (player === "Z") draw = true;
    else if (player === "X") win = true;
  }

  return win ? pts + 6 : draw ? pts + 3 : pts;
};

(async () => {
  let points = 0;
  const data = fs.readFileSync("input.txt", "utf8").split(/\r?\n/);
  data.forEach((data) => {
    const [opponent, player] = data.split(" ");
    points += checkOutcome(opponent, player);
  });
  console.log(`Total: ${points}`);
})();
