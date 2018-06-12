const obj = {};
const SIZE = Symbol();
/*シンボルは以下のように呼び出す */
obj[SIZE] = 8;
console.log(obj[SIZE]);
console.log(obj);

/*obj["SIZE"]と同じ*/
obj.SIZE = 12;

console.log(obj.SIZE);
/*上の12と同じプロパティの値 */
console.log(obj["SIZE"]);
/*シンボルSIZEのプロパティ */
console.log(obj[SIZE]);
/*シンボルSIZEのプロパティではなく"SIZE"のプロパティ */
console.log(obj);