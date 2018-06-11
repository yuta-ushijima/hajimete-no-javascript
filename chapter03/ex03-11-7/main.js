const sam1 = {
  name: 'Sam',
  age: 4,
};
console.log(sam1);

/*sam1とsam2は１行で書くか、インデントして書くかの違い*/
const sam2 = { name: 'Sam', age: 4 };
console.log(sam2);

console.log(sam1.name === sam2.name);
console.log(sam1.age === sam2.age);
/*プロパティは同じでも、オブジェクトとしては別
よって、以下はfalse */
console.log(sam1 === sam2);

const sam3 = {/*プロパティの値がオブジェクト */
  name: 'Sam',
  classification: {
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'MAmalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfamily: 'Felidnae',
    genus: 'Felis',
    species: 'F. catus',
  },
};
console.log(sam3);

/*以下はいずれもFalinaeが返ってくる。
JSでは、オブジェクトのプロパティに対するアクセス方法がいくつかある */
console.log(sam3.classification.family);
console.log(sam3["classification"].family);
console.log(sam3.classification["family"]);
console.log(sam3["classification"]["family"]);

/*以下は書き方が異なるだけで戻り値は一緒 */
sam3.speak = () => { return "Meow!"; };
sam3.speak = function () { return "Meow!"; };
console.log(sam3.speak());

/*classificationツリー全体を削除 */
delete sam3.classification;
/*speak関数を削除 */
delete sam3.speak;
console.log(sam3);

const タマ = {
  名前: 'タマ',
  分類: { /*プロパティの値がオブジェクト */
    界: '動物界',
    門: '脊索動物門',
    綱: '哺乳綱',
    目: 'ネコ目',
    科: 'ネコ科',
    亜科: 'ネコ亜科',
    属: 'ネコ属',
    種: 'ネコ',
  },
};
/*以下はいずれもネコ科が返ってくる */
console.log(タマ.分類.科);
console.log(タマ["分類"].科);
console.log(タマ.分類["科"]);
console.log(タマ["分類"]["科"]);

タマ.鳴く = () => { return "ニャーゴ"; };
タマ.鳴く = function () { return "ニャーゴ"; };
console.log(タマ.鳴く());

delete タマ.分類;
delete タマ.鳴く;
console.log(タマ);

// ざっくりと説明すると、Javascriptにおけるオブジェクトは入れ物


