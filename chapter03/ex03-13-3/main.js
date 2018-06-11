const a = [1, 2, 'c', 4, 5];
a[2] = 3;//配列aの3番目の要素に代入

console.log(a);//[1,2,3,4,5]
console.log(a.length);//5

a[81.3] = "eighty-one point three";
console.log(a[81.3]);//eighty-one point three

a[-2] = "マイナス2";//a[-2]は代入する最後の要素のインデックスよりも多いので、配列が大きくなる
console.log(a[-2]);
console.log(a);
console.log(a.length);