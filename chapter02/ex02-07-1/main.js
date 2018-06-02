$(document).ready(function () {
  'use strict';
  /*paper.jsをグローバルスコープにinstall*/
  paper.install(window);
  /*Paper.jsとキャンバスを関連付けて描画の準備*/
  paper.setup(document.getElementById('mainCanvas'));

  /*ここに描画する*/

  /*円を表すオブジェクトの生成
  第1引数...円の座標
  第2引数...円の座標
  第3引数...円の半径*/
  let c;
  /*for文で8*8=64の円を描く*/
  for(let x=25;  x<400;  x+=50) {
    for(let y=25; y<400; y+=50) {
      c = Shape.Circle(x, y, 20);
      c.fillColor = 'pink';
  }
}

/*描画スタート*/
paper.view.draw();

});
