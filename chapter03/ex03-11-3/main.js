const obj = {};
obj.color = "黄色";
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]);

const SIZE = Symbol();
/*シンボルは以下のように呼び出す */
obj[SIZE] = 8;
console.log(obj[SIZE]);
console.log(obj);