export default function main(input: string) {
  const numsStr = input.split("\n")[1];
  const nums = [...numsStr.split(" ")].map((val) => parseInt(val, 10));
  let result = 0;
  let numsTemp = [...nums];
  const initialIsAllNumberIsEven = numsTemp.every((val) => val % 2 === 0);
  let isAllNumberIsEven = initialIsAllNumberIsEven;
  while (isAllNumberIsEven) {
    if (numsTemp.every((val) => val % 2 === 0)) {
      let newNumsTemp = numsTemp.map((val) => val / 2);
      numsTemp = newNumsTemp;
      isAllNumberIsEven = true;
      result++;
    } else {
      isAllNumberIsEven = false;
    }
  }
  console.log(result);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
