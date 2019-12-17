# this の指す場所

## アロー関数 → 関数が定義されているスコープを this として参照

NG パターン

```
methods: {
  increment: function(){
    // コールバック関数のthisはwindowになってしまう
    setTimeout(function(){this.count++}, 100)
  }
}
```

OK パターン

```
methods: {
  increment: function(){
    // 予め別の変数にインスタンスを格納しておく
    let vm = this
    setTimeout(function(){this.count++}, 100)

    // bindでthisを紐づけた関数を作成
    setTimeout(function(){this.count++}.bind(this), 100)

    // アロー関数はsetTimeoutが呼ばれるincrementメソッドのthis(Vueインスタンスにアクセスできる)
    setTimeout(()=> {this.count++}, 100)
  }
}
```

逆に、this を用いて Vue インスタンスにアクセスする必要のあるメソッドの定義には、アロー関数は使用できない。

NG パターン

```
new Vue({
  methods: {
    increment: ()=>{
      // これはVueインスタンスのthisを使用できない
    }
  }
})
// incrementメソッド内ではこの外側部分のスコープがthisになってしまう。
```

OK パターン(短縮記法)

```
methods: {
  increment(){
    // ここではVueインスタンスのthisを使用できる
  }
}
```

`new Vue`のプロパティに定義するメソッドで使用すると外側のスコープ、`window`などが`this`になるため、使えない
Vue インスタンスに限らずメソッド内の this が必要な場面では利用できないが、無名関数の定義には便利

[reduce](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### v-if と v-show の違い

`v-if`と`v-show`を使用するときの条件の書き方は同じだが、動作に違いがある

#### v-if

条件を満たさなかった場合、要素は DOM レベルで削除されるため、インスタンスは破棄され、次描画されるときは初期化される。
内部にディレクティブやコンポーネントを多用していたり、特定のデータを持っていないとエラーになる場合には v-if を使う

### v-show

条件を満たさなかった場合、単純に`display: none;`スタイルを付与。常にリアクティブで監視されている。
内部にディレクティブやコンポーネントが少なく、切り替え頻度が高いものは v-show を使用するとパフォーマンスがよくなる。

### keep-alive での状態維持

`v-if`や動的コンポーネントの切り替えではインスタンスが破壊され、状態は初期化される。
組み込みコンポーネントの`<keep-alive>`を使用すると、非描画になってもコンポーネントと状態を維持することができる。
