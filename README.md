# atCoder

https://atcoder.jp/contests/abs/tasks

## テストデータダウンロード

- `mkdir practiceA`

- `cd practiceA`

- `oj d https://atcoder.jp/contests/abs/tasks/practice_1`

## テスト実行

- `cd practiceA`

- `oj t -c "../node_modules/.bin/ts-node practiceA.ts" -d test`

## 投稿

- `cd practiceA`

- `oj s practiceA.py`

## テストファイルに関して

ファイルに以下を入力する必要がある

`fnName(require("fs").readFileSync("/dev/stdin", "utf8"));`
