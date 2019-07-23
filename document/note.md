# type="module"
importする際に
```html
<script src="js/bet.js" type="module">
```
を追加していてにないとエラーになる
`` SyntaxError: import declarations may only appear at top level of a module ``

# import時のファイル名
```
import { Card } from "./card.js"
```
jsを省略すると  
` クロスオリジン要求をブロックしました`
エラーがでる

# classファイルをインポートするとき
classをインポートするときにそのクラスのファイルはhtmlで読み込まなくてもよい

# position:absoluteされたものを上下左右中央に配置

```css
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
width:好きな値;
height:好きな値;
```