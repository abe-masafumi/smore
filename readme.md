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

### DBからのデータ取得

[参考youtube](https://www.youtube.com/watch?v=9NOg_HSbo9w)

### subコレクション

[参考資料](https://zenn.dev/hiro__dev/scraps/bfe3ca1757ffae)
[参考資料](https://qiita.com/karayok/items/0996c8f0ea219c284dbd)
[できることとできないこと](https://zenn.dev/yucatio/articles/173f386c471398)