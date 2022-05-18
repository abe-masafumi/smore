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

⭐️ firebase authの入力間違えじのエラーを表示したい。無反応になるため

- その時の画面遷移が遅い

- kanさんのスプシと再度照らし合わせる

- 画面遷移がちらつくところを修正

- ログインしてくださいの画面を全体に組み込む

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