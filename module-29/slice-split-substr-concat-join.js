const anthem = 'Amar sonar bnagla Ami tomai valobasi';

// split

//jodi string tai jai jaiga gulo ty space asy say kan thakay alada alada koray dakai tay taholay [ 'space'] dibo
const words = anthem.split(' ');
console.log(words);

//jodi string tai jai jaiga gulo ty a asy say kan thakay alada alada koray dakai tay taholay [ 'a'] dibo
const withoutA = anthem.split('a');
console.log(withoutA);

//slice

//jodi index number ar maddomay akta nirdisto index number thakay akta nirdito index porjonto nibo taholy [slice] dibo

const smallSlice = anthem.slice(5, 17); //(start index number ,end index number)
console.log(smallSlice);

//substr

const substrInput = anthem.substr(11, 8); //(satart index number, joto gulo element chai)
console.log(substrInput);

//substring

const part = anthem.substring(8, 20); //(slice ar auta same)
console.log(part);



//concat 

const first = 'Shihab ';
const second = 'Uddin';

console.log(first + second);

//order

const fullName = first.concat(second);
console.log(fullName);

//jodi akadik jok korty chai taholay

const third = 'MD ';

const total = third.concat(first).concat(second).concat(' student of Rajshahi university'); //jodi aro chai taholay [.concat ] diay jok koary dibo//
console.log(total);


//join the

const words2 = ['alim', 'dalim', 'falim', 'kalim', 'balim'];
const addSpaces = words2.join(' '); //array element ar modday faka chai taholay [' ']
const noSpace = words2.join(''); //jodi faka na chai tahul
const koma = words2.join(','); //jodi koma chai taholay
const komaSpace = words2.join(', '); //koma plus space di
// console.log(words2);
console.log(addSpaces);
console.log(noSpace);
console.log(koma);
console.log(komaSpace);