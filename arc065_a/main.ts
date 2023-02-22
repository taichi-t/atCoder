export default function main(input: string) {
  const formattedInput = input.replace(/\n/g, "");
  const rest = formattedInput
    //eraserから処理しないと、dreameraserというパターンに対応できない
    .replace(/erase(r)?/g, "")
    .replace(/dream(er)?/g, "");

  if (!rest) {
    console.log("YES");
    return;
  }
  console.log("NO");
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
