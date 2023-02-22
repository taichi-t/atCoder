//解けなかった

function generateCombinations(
  arr: any[],
  len: number,
  start: number,
  result: any[]
) {
  if (len === 0) {
    return;
  }
  for (let i = start; i <= len; i++) {
    result.push(arr[i]);
    generateCombinations(arr, len - 1, i, result);
    result.pop();
  }
}

export default function main(input: string) {
  const [N, Y] = input.split(" ");
  //Nの範囲内で全組み合わせを出力
  let combinations = [];
  // [[10,10,10],[10,100,10,10]]
  generateCombinations([10000, 5000, 1000], Number(N), 0, combinations);
  //組み合わせを全て実行してYになる組み合わせを見つける。見つかったら、その組み合わせのx y zを返す
  const matchArr = combinations.filter((comb) => {
    const sum = comb.reduce((pre: number, curr: number) => {
      return pre + curr;
    }, 0 as number);
    return sum === Number(Y);
  }) as [];
  //見つからない場合は-1 -1 -1を返す
  if (matchArr.length === 0) {
    console.log("-1 -1 -1");
    return;
  }
  const result = matchArr.reduce(
    (pre: Record<"10000" | "5000" | "1000", number>, curr: number) => {
      const map = {
        ...pre,
        "10000": curr === 10000 ? pre[10000]++ : pre["10000"],
        "5000": curr === 5000 ? pre[5000]++ : pre["5000"],
        "1000": curr === 1000 ? pre[1000]++ : pre["1000"],
      };
      return map;
    },
    {
      "10000": 0,
      "5000": 0,
      "1000": 0,
    }
  ) as Record<"10000" | "5000" | "1000", number>;
  console.log(`${result[10000]} ${result["5000"]} ${result["1000"]}`);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
