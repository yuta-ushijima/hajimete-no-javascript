const obj = {};
obj.color = "黄色";
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]);
console.log(obj.color);
console.log(obj["color"]);
console.log(obj.size);
/*[]の中が文字列でないので、以下はエラーになる*/
console.log(obj[color]);