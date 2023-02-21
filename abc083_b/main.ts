export default function main(input: string) {
  const sp = input.split(" ");
  const N = parseInt(sp[0]);
  const A = parseInt(sp[1]);
  const B = parseInt(sp[2]);
  let arr = [];
  for (let i = 1; i <= N; i++) {
    let digitStr = String(i);
    let sum = digitStr.split("").reduce((pre, curr) => {
      return pre + parseInt(curr, 10);
    }, 0);

    if (A <= sum && sum <= B) {
      arr.push(i);
    }
  }
  const result = arr.reduce((pre, curr) => {
    return pre + curr;
  }, 0);

  console.log(result);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
