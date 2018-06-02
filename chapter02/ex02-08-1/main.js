$(document).ready(function () {
  'use strict';
  /*paper.jsをグローバルスコープにinstall*/
  paper.install(window);
  /*Paper.jsとキャンバスを関連付けて描画の準備*/
  paper.setup(document.getElementById('mainCanvas'));

  /*ここに描画する*/

  /*toolオブジェクトの作成*/
  let tool = new Tool;

/*toolオブジェクトにonMouseDownというイベントハンドラを付与
onMouseDownはマウスがクリックされた時に反応するイベントハンドラ
マウスがクリックされると、function(event)で定義された無名関数が実行される*/
  tool.onMouseDown = function(event) {
    /*event.pointはxとyの2つのプロパティを持っている=マウスがクリックされた場所のx座標とy座標を表している*/
    // let c = Shape.Circle(event.point.x, event.point.y, 20);
    /*以下の書き方のようにevent.point自体を渡すこともできる*/
    let c = Shape.Circle(event.point, 20);
    c.fillColor = 'green';
    };

/*描画スタート*/
paper.view.draw();

});
