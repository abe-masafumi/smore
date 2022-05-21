## smore


### firebaseへのhosting

firebaseにhosting
 ```
 firebase deploy
 ```

git hub actions で自動hosting
```
git push origin master
```

### clone後

node_moduleのインストール
```
npm install
```

### firebaseui
[UI](https://firebase.google.com/docs/auth/web/firebaseui?hl=ja)

### ルール
```
[DBの権限エラー](https://atsu-developer.net/279/)
```

### import 
```
import { } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-SERVICE.js'
(SERVICE は firebase-firestore などの SDK 名です）。
```

[モジュールのimport方法](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)

### DBからのデータ取得

[参考youtube](https://www.youtube.com/watch?v=9NOg_HSbo9w)

### subコレクション

[参考資料](https://zenn.dev/hiro__dev/scraps/bfe3ca1757ffae)
[参考資料](https://qiita.com/karayok/items/0996c8f0ea219c284dbd)
[できることとできないこと](https://zenn.dev/yucatio/articles/173f386c471398)
[ドキュメントIDを先に取得](https://devsakaso.com/vue-firebase-get-doc-id-before-adding/)


### やること

<!-- - 動画を入れる（なし） -->

⭐️ firebase authの入力間違えじのエラーを表示したい。無反応になるため

<!-- - その時の画面遷移が遅い -->

- kanさんのスプシと再度照らし合わせる

<!-- - 画面遷移がちらつくところを修正  -->

<!-- - ログインしてくださいの画面を全体に組み込む  -->

<!-- - Praceholder内は記入例がいい -->

<!-- - Inputのwidthを広げる -->

<!-- - Pet_formの質問を詳しく -->

<!-- - 生年月日をセレクトボックスにする！ -->

<!-- - 記入例があった方がいい -->

<!-- - マイクロチップ番号は数値だけ？？ -->

<!-- - 必須とそうじゃ無いのが分かりづらい -->

<!-- - Mypageの読み込みが遅い(未実装) -->

- 順番はこのままでいい？？

<!-- - 同じ写真が入る -->

- 横スクロールは全画面でなしにする(css当てたが効いてない)画面

- 写真のプレビューあった方がいい？？(アンドロイド画面を見たい)　なくていい

<!-- - 長文の質問が読みづらい -->

<!-- - ペットを追加するボタンと文字がずれてる -->

<!-- - ペット一覧の時に何も登録がない時は(登録はありません)の表示 -->

<!-- - ご来店ありがとうございますのスタイル変更 -->

<!-- - ログインして下さいの画面が昔のアイホンだと下にきてる -->

- 毛色もセレクトボックスで実装　なくていい

<!-- - ログイン時の登録されていなかったパターンのエラー通知 -->

<!-- - ペット詳細の画面ロードが遅い -->

<!-- - セレクトボックスが遠い年 -->

- 選び直さなかったらundefindになる

<!-- - 狂犬病必須が抜けてる -->

- signup時の入力ミスのエラー通知

- 質問:耳のたれ耳、立ち耳は成長と共に変わる？

- メッセンジャーの変更点を変更


[cloud vision](https://cloud.google.com/vision/docs/detect-labels-image-client-libraries?hl=ja#using_the_client_library)
[参考資料](https://qiita.com/popy1017/items/78cd72cd6337973c3b65)

[パラメータの取得](https://gray-code.com/javascript/get-parameter-of-url/)

[まとめ記事](https://www.wakuwakubank.com/posts/723-firebase-firestore-query/)


### deploy後の確認

urlが変更するとqrcodeの読み取り後のサイトも変更しないといけない

### err

Error: FirebaseError: Expected type 'fc', but it was: a custom Rc object



### style 

fontを16pxに変更

safariはaleatとconfirmが使えない

[誕生日フォーム](https://zenn.dev/okoe/articles/7876b897c0fccf)