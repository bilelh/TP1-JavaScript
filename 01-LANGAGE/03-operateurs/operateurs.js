console.log('COMPARAISONS');

var x;
var y;

console.log('Égalité faible : ', x == y);
console.log('Égalité forte', x === y);

x = 2;
y = 'Formation';

console.log('Égalité faible : ', x == y);
console.log('Égalité forte', x === y);

x = 2;
y = '2';

console.log('Égalité faible : ', x == y);
console.log('Égalité forte', x === y);

x = undefined;
y = null;

console.log('Égalité faible : ', x == y);
console.log('Égalité forte', x === y);

/******************************************************* */
console.log('ADDITIONS STRING ET NUMBER');

var a; 
a = 20 + 5 ;
console.log('20 + 5 : ', a);

a = 20 + 'Fromation' ;
console.log("20 + 'Formation' : ", a);

a = 20 + 5 + 'Fromation' ;
console.log("20 + 5 + 'Formation' : ", a);

a = 20 + 'Fromation' + 5 ;
console.log("20 + 'Formation' + 5 : ", a);

a = 'Fromation' + 20 + 5 ;
console.log("'Formation' + 20 + 5 : ", a);