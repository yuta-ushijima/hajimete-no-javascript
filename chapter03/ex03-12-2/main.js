const s = "hello";
s.rating = 3;
/*s.ratingがundefinedになるのは、sが一時的にStringオブジェクトになるものの、
呼び出されるとすぐに破棄されてしまうため。 */
console.log(s.rating);//undefinedになる。
