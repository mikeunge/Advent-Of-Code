import * as fs from "fs";

/* RPS - calculation
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
    if (player === "X") {
      draw = true;
    } else if (player === "Y") {
      win = true;
    }
  } else if (opponent === "B") {
    if (player === "Y") {
      draw = true;
    } else if (player === "Z") {
      win = true;
    }
  } else {
    if (player === "Z") {
      draw = true;
    } else if (player === "X") {
      win = true;
    }
  }

  return win ? pts + 6 : draw ? pts + 3 : pts;
};

const getDesiredOutcome = (opponent: string, outcome: string): string => {
  let player: string;
  if (outcome === "X") {
    // loose
    if (opponent === "A") {
      player = "Z";
    } else if (opponent === "B") {
      player = "X";
    } else {
      player = "Y";
    }
  } else if (outcome === "Y") {
    // draw
    if (opponent === "A") {
      player = "X";
    } else if (opponent === "B") {
      player = "Y";
    } else {
      player = "Z";
    }
  } else {
    // win
    if (opponent === "A") {
      player = "Y";
    } else if (opponent === "B") {
      player = "Z";
    } else {
      player = "X";
    }
  }
  return player;
};

const part1 = async (data: string[]): Promise<number> => {
  let points = 0;
  data.forEach((data) => {
    const [opponent, player] = data.split(" ");
    points += checkOutcome(opponent, player);
  });
  return points;
};

const part2 = async (data: string[]): Promise<number> => {
  let points = 0;
  data.forEach((data) => {
    const [opponent, outcome] = data.split(" ");
    const player = getDesiredOutcome(opponent, outcome);
    points += checkOutcome(opponent, player);
  });
  return points;
};

(async () => {
  const data = fs.readFileSync("input.txt", "utf8").split(/\r?\n/);
  const [p1, p2] = await Promise.all([part1(data), part2(data)]);
  console.log(`[1] Total points: ${p1}`);
  console.log(`[2] Total points: ${p2}`);
})();
