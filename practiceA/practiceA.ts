export default function welcomeToAtCoder(input: string) {
  const splitedBySentence = input.split("\n");
  const numberA = parseInt(splitedBySentence[0], 10);
  const numberB = parseInt(splitedBySentence[1].split(" ")[0], 10);
  const numberC = parseInt(splitedBySentence[1].split(" ")[1], 10);
  const result = `${numberA + numberB + numberC} ${splitedBySentence[2]}`;
  console.log(result);
}
welcomeToAtCoder(require("fs").readFileSync("/dev/stdin", "utf8"));
