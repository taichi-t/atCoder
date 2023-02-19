# atCoder

https://atcoder.jp/contests/abs/tasks

## テストデータダウンロード

- `mkdir {{task_id}}`

- `cd {{task_id}}`

- `oj d https://atcoder.jp/contests/abs/tasks/{{task_id}}`

## テスト実行

- `cd {{task_id}}`

- `oj t -c "../node_modules/.bin/ts-node main.ts" -d test`

## 投稿

- `cd {{task_id}}`

- `oj s main.ts`

## テストファイルに関して

ファイルに以下を入力する必要がある

`fnName(require("fs").readFileSync("/dev/stdin", "utf8"));`
