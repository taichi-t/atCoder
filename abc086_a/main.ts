// 問題文
// シカのAtCoDeerくんは二つの正整数
// a,b を見つけました。 a と b の積が偶数か奇数か判定してください。

// 制約 1 ≤ a,b ≤ 10000
// a,b は整数

// 入力
// 入力は以下の形式で標準入力から与えられる。
// a b

// 出力
// 積が奇数なら Odd と、 偶数なら Even と出力せよ。

export default function main(input: string) {
  const num1 = parseInt(input.split(" ")[0], 10);
  const num2 = parseInt(input.split(" ")[1], 10);
  const sum = num1 * num2;
  const isEven = sum % 2 === 0;
  const result = isEven ? "Even" : "Odd";
  console.log(result);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
