let weight01 = document.querySelector('.weight01');
let weight02 = document.querySelector('.weight02');

/**
 * selectのoptionタグを生成するための関数
 * @param {Element} elem 変更したいselectの要素
 * @param {Number} val 表示される文字と値の数値
 */
 function createOptionForElements(elem, val) {
  let option = document.createElement('option');
  option.text = val;
  option.value = val;
  elem.appendChild(option);
}

//年の生成
for(let i = 1; i <= 30; i++) {
  createOptionForElements(weight01, i);
}
//月の生成
for(let i = 1; i <= 9; i++) {
  createOptionForElements(weight02, i);
}
