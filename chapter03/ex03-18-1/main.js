const a = parseInt("16 volts", 10);
console.log(a);

const b = parseInt("3a", 16);//3aは16進数として解釈
console.log(b);

const c = parseFloat("15.5 kph");//parseFloatは常に10進数として解釈
console.log(c);
