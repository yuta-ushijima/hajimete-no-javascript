$(document).ready(function () {
  'use strict';
  /*paper.jsをグローバルスコープにinstall*/
  paper.install(window);
  /*Paper.jsとキャンバスを関連付けて描画の準備*/
  paper.setup(document.getElementById('mainCanvas'));
  /*描画スタート*/
  paper.view.draw();

  /*ここに描画する*/

  /*円を表すオブジェクトの生成
  第1引数...円の座標
  第2引数...円の座標
  第3引数...円の半径*/
  let c = Shape.Circle(200, 200, 50);
  c.fillColor = 'green';
});
