# javascriptのクラスのエクスポートがうまくいかなかった

***
NG  
animal.js
```JAVASCRIPT
class class Animal{
    hello(){
        console.log('hello');
    }
}
export class Animal{ }
```
main.js
```JAVASCRIPT
import { Animal } from './animal.js';
var animal = new Animal();
animal.hello();
```

***
OK  
animal.js

```javascript
export class Animal{
    hello(){
        console.log('hello');
    }
}
```
クラス名にexportをつけて、最後に記述(exportはファイルの最後に記述しないといけない)することで解決