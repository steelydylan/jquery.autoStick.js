#jquery.autoStick.js

##download

[jquery.autoStick.js](https://raw.githubusercontent.com/steelydylan/jquery.autoStick.js/master/js/jquery.autoStick.js)

##usage

```js
$(".js-stick").autoStick({
	wrapperElement:".js-wrapper",
	beforeElement:".js-top",
	marginTop:20,
	enableCondition:function(){
		return $(window).innerWidth() > 768 ? true : false;
	}
});
```

##option

- <code>wrapperElement</code>スクロール量を計測する親の要素
- <code>beforeElement</code>スクロール量がbeforeElementの下限値とmarginTopを足した値を超えた所でfixedを開始する
- <code>marginTop</code>親要素もしくはbeforeElementからの距離
- <code>marginBottom</code>親要素の下限値からの距離
- <code>enableCondition</code>このプラグインを有効にする条件を指定

##author

steelydylan

[horicdesign](http://horicdesign.com)


