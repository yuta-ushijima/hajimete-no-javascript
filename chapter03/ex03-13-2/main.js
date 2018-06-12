const a = ['a', 'b', 'c'];
console.log(a.length);//配列の大きさを取得
console.log(a[0]);//最初の要素を取得
console.log(a[a.length - 1]); //配列における最後の要素の添え字(インデックスはarr.length -1 で取得可能)

const b4 = [//オブジェクトを要素としてもつ配列
  { 名前: "ルビー", 硬度: 9 },
  { 名前: "ダイヤモンド", 硬度: 10 },
  { 名前: "トパーズ", 硬度: 8 },
];
console.log(b4[1].名前);
console.log(b4[2].硬度);

