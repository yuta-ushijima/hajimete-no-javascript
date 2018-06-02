$(document).ready(function () {
  'use strict';
  console.log('main.jsを読み込み中...。');

  /*paper.jsをグローバルスコープにinstall*/
  paper.install(window);
  /*Paper.jsとキャンバスを関連付けて描画の準備*/
  paper.setup(document.getElementById('mainCanvas'));

  /*ここに描画する*/
  let tool  = new Tool();

  /*Hello World*/
  let c = Shape.Circle(200, 200, 80); //円
  c.fillColor = 'black'; //中を黒く塗る
  let text = new PointText(200, 200); //新しいテキストを領域中央に
  text.justification = 'center'; //センタリング
  text.fillColor = 'white'; //テキストの色
  text.fontSize = 20; //テキストのフォントサイズ
  text.content = 'hello world'; //円に表示する文字列

  /*イベントハンドラ*/
  tool.onMouseDown = function(event) {
    let c = Shape.Circle(event.pont, 20);
    c.fillColor = 'green';
  };

/*描画スタート*/
paper.view.draw();

});
