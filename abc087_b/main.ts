// 問題文

export default function main(input: string) {
  const splited = input.split("\n");
  const fiveHundredYenCount = parseInt(splited[0]);
  const oneHundredYenCount = parseInt(splited[1]);
  const fiftyYenCount = parseInt(splited[2]);
  const sumYen = parseInt(splited[3]);
  let result = 0;
  for (
    let fiveHundredIndex = 0;
    fiveHundredIndex <= fiveHundredYenCount;
    fiveHundredIndex++
  ) {
    for (
      let onehundredIndex = 0;
      onehundredIndex <= oneHundredYenCount;
      onehundredIndex++
    ) {
      for (let fiftyIndex = 0; fiftyIndex <= fiftyYenCount; fiftyIndex++) {
        const fiveHundredYenSum = fiveHundredIndex * 500;
        const onehundredYenSum = onehundredIndex * 100;
        const fiftyYenSum = fiftyIndex * 50;
        if (fiveHundredYenSum + onehundredYenSum + fiftyYenSum == sumYen) {
          result++;
        }
      }
    }
  }
  console.log(result);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
