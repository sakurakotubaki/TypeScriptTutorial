# TypeScriptでESlintを使う

こちらを参照

https://zenn.dev/joo_hashi/articles/bc49be646833dc

package.jsonを作成する
```bash
npm init -y
```

インストールするパッケージ
```bash
npm install eslint --save-dev
```

インストールしたらこのコマンドを実行する
自動でeslintの設定をしてくれるようだ。
```bash
npm init @eslint/config
```

設定の手順をスクリーンショットで記載する

<img src="img/1.png" width="500px">
<img src="img/2.png" width="500px">
<img src="img/3.png" width="500px">
<img src="img/4.png" width="500px">
<img src="img/5.png" width="500px">
<img src="img/6.png" width="500px">
<img src="img/7.png" width="500px">
<img src="img/8.png" width="500px">

## ルールを追加
; をつけるのを必須にすると設定ファイルにも静的解析がかかるので、
; をつける!

<img src="img/9.png" width="500px">

**つけたら消える!**

<img src="img/10.png" width="500px">