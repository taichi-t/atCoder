export default function main(input: string) {
  const inputList = input.split("\n").map((s) => parseInt(s, 10));
  inputList.shift();
  const set = new Set(inputList);
  const result = set.size - 1;
  console.log(result);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
