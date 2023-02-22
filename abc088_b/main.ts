export default function main(input: string) {
  const [NStr, cardsSrt] = input.split("\n");
  const N = parseInt(NStr);
  const cardsArr = cardsSrt
    .split(" ")
    .map((val) => parseInt(val))
    .sort((a, b) => b - a);
  let aliceSum = 0;
  let bobSum = 0;
  for (let i = 0; i < N; i++) {
    const isAliceTurn = i % 2 === 0;
    if (isAliceTurn) {
      aliceSum = aliceSum + cardsArr[i];
    } else {
      bobSum = bobSum + cardsArr[i];
    }
  }
  const result = aliceSum - bobSum;
  console.log(result);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
