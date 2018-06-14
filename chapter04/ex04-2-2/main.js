let s = '3';
for (; s.length < 10; s = ' ' + s);//10桁になるまで前に空白を埋める
console.log(s); //         0(空白9個+「0」)

for (let x = 0.2; x < 3.0; x += 0.2)//整数以外の増加分
  console.log(x);