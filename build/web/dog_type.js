//料理ジャンルの値と、それに対応するメニュー一覧を格納しておく -- [1]
const foodMenu = 
  {
    "ミックス犬": ["ミックス犬 5kg未満"
, "ミックス犬 10kg未満"
, "ミックス犬 25kg未満"
, "ミックス犬 25kg以上"],
    "あ行": ["アーフェンピンシャー"
, "アイリッシュウォータースパニエル"
, "アイリッシュウルフハウンド"
, "アイリッシュセッター"
, "アイリッシュテリア"
, "秋田犬"
, "アイリッシュレッドアンドホワイトセター"
, "小豆柴"
, "アナトリアンシェパード"
, "アフガンハウンド"
, "アメリカンアキタ"
, "アメリカンウォータースパニエル"
, "アメリカンエスキモードッグ"
, "アメリカンコッカースパニエル"
, "アメリカンスタッフォードシャーテリア"
, "アラスカンマラミュート"
, "イタリアングレーハウンド"
, "イビザンハウンド"
, "イングリッシュコッカースパニエル"
, "イングリッシュスプリンガースパニエル"
, "イングリッシュセッター"
, "イングリッシュポインター"
, "イングリッシュマスティフ"
, "ウィペット"
, "ウエストハイランドホワイトテリア"
, "ウェルシュシープドッグ"
, "ウェルシュスプリンガースパニエル"
, "ウェルシュテリア"
, "エアデールテリア"
, "エストレラマウンテンドッグ"
, "オーストラリアンキャトルドッグ"
, "オーストラリアンケルピー"
, "オーストラリアンシェパード"
, "オーストラリアンシルキーテリア"
, "オーストラリアンテリア"
, "オールドイングリッシュシープドッグ"],
    "か行": ["甲斐犬"
, "カーリーコーテッドレトリバー"
, "カニンヘンダックスフンド"
, "カレリアンベアドッグ"
, "キースホンド"
, "紀州犬"
, "キャバチワ"
, "キャバプー"
, "キャバリア"
, "キングチャールズスパニエル"
, "クーバース"
, "クランバースパニエル"
, "グレイハウンド"
, "グレートデン"
, "グレートピレニーズ"
, "クロアチアンシープドッグ"
, "クロムフォルレンダー"
, "ケアンテリア"
, "ケリーブルーテリア"
, "コーイケルホンディエ"
, "コーギー(ウェルシュコーギーカーディガン)"
, "コーギー(ウェルシュコーギーペンブローク)"
, "ゴードンセッター"
, "ゴールデンドゥードル"
, "ゴールデンレトリバー"
, "コッカークス"
, "コッカプー"
, "コトン・ド・テュレアール"
, "コモンドール"],
    "さ行": ["サーロスウルフドッグ"
, "サモエド"
, "サルーキ"
, "シーズー"
, "シープー"
, "シーポメ"
, "シーリハムテリア"
, "シェットランドシープドッグ"
, "シェパード種"
, "柴犬"
, "シベリアンハスキー"
, "シャーペイ"
, "ジャーマンシェパード"
, "ジャーマンショートヘアードポインター"
, "ジャーマンスパニエル"
, "ジャーマンハンティングテリア"
, "ジャーマンピンシャー"
, "ジャーマンワイアーヘアードポインター"
, "ジャイアントシュナウザー"
, "ジャックラッセルテリア"
, "シュナウザー種"
, "シュナプー"
, "シュナマル"
, "シーリハムテリア"
, "スカイテリア"
, "スキッパーキ"
, "スコティッシュテリア"
, "スタッフォードシャーブルテリア"
, "スタンダードダックスフンド"
, "スタンダードプードル"
, "スパニッシュマスティフ"
, "セントバーナード"
, "ソフトコーテッド・ウィートンテリア"],
    "た行": ["タイニープードル"
, "ダップー"
, "ダルメシアン"
, "チベタンスパニエル"
, "チベタンテリア"
, "チベタンマスティフ"
, "チャイニーズクレステッドドッグ"
, "チャウチャウ"
, "チワズー"
, "チワックス"
, "チワパグ"
, "チワピン"
, "チワプー"
, "チワブル"
, "チワマル"
, "チワワ"
, "狆"
, "ティーカッププードル"
, "トイプードル"
, "トイマンチェスターテリア"
, "ドーベルマン"
, "ドゴアルヘンティーノ"
, "土佐犬.四国犬"
, "土佐闘犬"],
    "な行": ["ナポリタンマスティフ"
, "日本スピッツ"
, "日本テリア"
, "ニューファンドランド"
, "ノーフォークテリア"
, "ノーリッチテリア"],
    "は行": ["ハバニーズ"
, "バーニーズマウンテンドッグ"
, "パグ"
, "パグズー"
, "バセットハウンド"
, "バセンジー"
, "パピキー"
, "パピチワ"
, "パピヨン"
, "ハリア"
, "パーソンラッセルテリア"
, "ビアデッドコリー"
, "ビーグル"
, "ビションフリーゼ"
, "ピットブル"
, "ピンプー"
, "ファラオハウンド"
, "プーリー"
, "プチバセットグリフォンバンデーン"
, "プチブラバンソン"
, "フラットコーテッドレトリバー"
, "ブラッドハウンド"
, "ブリタニースパニエル"
, "ブリュッセルグリフォン"
, "ブルドッグ"
, "ブルマスティフ"
, "フレンチブルドッグ"
, "ペキチー"
, "ペキックス"
, "ペキニーズ"
, "ペキプー"
, "ベドリントンテリア"
, "ベルジアングリフォン"
, "ベルジアングローネンダール"
, "ベルジアンタービュレン"
, "ベルジアンマリノア"
, "ボーダーコリー"
, "ボーダーテリア"
, "ポーチュギーズウォータードッグ"
, "ボクサー犬"
, "ボストンテリア"
, "北海道犬"
, "ポメキー"
, "ポメ柴"
, "ポメチワ"
, "ポメックス"
, "ポメパグ"
, "ポメプー"
, "ポメマル"
, "ポメヨン"
, "ポメラニアン"
, "ポリッシュローランドシープドッグ"
, "ボルゾイ"
, "ボルドーマスティフ"
, "ボロニーズ"
, "ホワイトシェパード"
, "ポンスキー"],
    "ま行": ["豆柴"
, "マルーキー"
, "マルシーズ"
, "マルチーズ"
, "マルックス"
, "マルパピ"
, "マルプー"
, "ミニチュアシベリアンハスキー"
, "ミニチュアシュナウザー"
, "ミニチュアダックスフンド"
, "ミニチュアピンシャー"
, "ミニチュアプードル"
, "ミニチュアブルテリア"],
    "や行": ["ヨークシャテリア"
, "ヨーチー"
, "ヨープー"],
    "ら行": ["ラサアプソ"
, "ラフコリー"
, "ラブラドールレトリバー"
, "ラブラドゥードル"
, "レークランドテリア"
, "レオンベルガー"
, "ロットワイラー"],
    "わ行": ["ワイマラナー"
, "ワイヤーフォックステリア"],
    "その他":["その他"]
  };

//選択されたジャンルを受け取って処理をする -- [4]

let option;

function setMenuOptions(selectedGenre){
const selectFoodName = document.getElementById('food-name'); //2つめのセレクトボックスを取得し
selectFoodName.innerHTML = '';
selectFoodName.disabled = false; //選択可能な状態にする

//選択されたジャンルのメニュー一覧に対して処理をする
foodMenu[selectedGenre].forEach((menu) => {
    option = document.createElement('option'); //option要素を新しく作る
    option.value = menu; //option要素の値に、メニューを識別できる番号を指定する
    option.innerHTML = menu; //ユーザー向けの表示としてメニュー名を指定する
    selectFoodName.appendChild(option); //セレクトボックスにoption要素を追加する
    });
}

//ジャンルを選ぶためのセレクトボックスを指定 -- [2]
const genreSelect = document.getElementById('genre');

//なんらかのジャンルが選択されたら（change）、処理を行う -- [3]
genreSelect.addEventListener('change', (e) => {
    
    setMenuOptions(e.target.value);  //選択された料理ジャンルを引数として関数に渡す
    //※e.target.valueはgenreSelectで選択された値
})