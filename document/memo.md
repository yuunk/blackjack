blackjackを作る

デザインを決める
実装

# 機能

勝敗の決まり方

勝ち
配られたカードの合計点数が21点を越さずに、21点により近いハンド（役）を作った方が勝ち

負け２１を超えた場合まけ
ディーラーとプレイヤーの両方がバーストした場合、ディーラーの勝ち

ヒット
* 手元にあるカードにさらに1枚のカードを追加すること

スタンド
* カードの追加をストップし、現在のハンドで勝負をすること

サレンダー負けを認めること
ディーラールール
17以上になるまでヒット
１７以上になったらスタンド
ディーラーはバーストしてもその時点では負けにならない

aは１としても１１としても数えられる

A + 10(J Q K)の場合は21となりブラックジャックとなるためブラックジャックで最高の手

トランプは５２枚

# デザイン
プレイヤーの画像を選べる


***
発生したエラーNaN
```
var sum;
sum += random;
```
で発生した。この場合sumに０を代入することで解決した
# 気づき
document.getElementByIdで取得した値をいれた変数を比較することができた
```JAVASCRIPT
const playerCardArea = document.getElementById('player-card');

 if(character === playerCardArea){
            playerSum += random;
            console.log(playerSum);
}
```