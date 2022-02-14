// slice use

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 55, 88, 116, 774, 556, ];
const numSliced = numbers.slice(5, 15); //ay kany 5 number index thakay 14 number index porjonto day ks bay
console.log(numSliced);


// splice use
const numSpliced = numbers.splice(4, 6); //(start index number, ami say index thakay kkoto gulo element nibo sayta)
console.log(numSpliced);
//splice use korlay amar a jaysob element kay soriaty si oi gulo ar men array tay thak bay nai tai joi amra mul array kay abar orint kori taholay dakbo oi upadan gulo a+oi aarray tay nai
console.log(numbers);



//splice ar maddomay element add 

const getNum = [1, 2, 3, 4, 5, 6, 7, 8, 55, 88, 116, 774, 556, ];

/* 1.splice ay first parameter ta holo jay index thakay suru hobay
2.second parameter holo koto gulo element soraty chai say sonka
3.second parameter ay [0] ditay pari ttholay kono element sribay na
4.jodi element add kortay chai taholay secont parameter ar por ,2,3,4,6 ay vabay add korbo joto gulo chai */

const numberSlice = getNum.splice(5, 4, 1000, 2555, 147, 1254);
console.log(numberSlice); //ar maddomay jay element gulo ad holo say gulo dakakby
console.log(getNum); //new array jay ta holo say ta dkay bay