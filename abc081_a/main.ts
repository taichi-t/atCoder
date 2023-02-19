// https://atcoder.jp/contests/abs/tasks/abc081_a

export default function main(input: string) {
  const nums = input;
  // 1だったらカウント
  let result: number = 0;
  [...nums].forEach((val) => {
    if (parseInt(val) === 1) {
      result++;
    }
  });
  console.log(result);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
