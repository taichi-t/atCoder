export default function main(input: string) {
  const [N, Y] = input
    .split(" ")
    .map((val) => parseInt(val.replace(/\n/g, "")));
  let x1 = "-1";
  let y1 = "-1";
  let z1 = "-1";
  for (let x = 0; x <= N; x++) {
    for (let y = 0; y <= N - x; y++) {
      //O(n^3)になるのでzはxとyから求める
      const z = N - x - y;
      if (10000 * x + 5000 * y + 1000 * z === Y) {
        x1 = String(x);
        y1 = String(y);
        z1 = String(z);
      }
    }
  }
  console.log(`${x1} ${y1} ${z1}`);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
