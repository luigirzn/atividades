
let valor01 = 10;
const valor02 = 5;
console.log('A multiplicação de ' + valor01 +' por ' + valor02 + ' é ' + valor01 *
valor02 );
console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`);


console.clear();
const string01 = 'Instituto da Oportunidade Social';

console.log(string01.charAt(0));
console.log(string01[0]);

console.log(string01.charAt(10));
console.log(string01[10]);



console.clear();
let texto = 'salve';
console.log(texto.length);



console.clear();
const s = 'ios';
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s);



const str = 'hello world';
console.log(str.substring(1, 3));

console.log(str.substring(2));


const str1 = 'bom dia pessoal';
const palavras = str1.split(' ');
console.log(palavras[3]);

const chars = str1.split('');
console.log(chars[7]);

const strCopy = str1.split();
console.log(strCopy);






console.clear();
let mensagem = 'salve IOS';
console.log(mensagem);
let novaMensagem = mensagem.replace('boa tarde', 'bom dia');
console.log(novaMensagem);



// Métodos de busca en strings
console.clear();
let frase = 'eu gosto de frango';
console.log(frase.indexOf('salve')); 
console.log(frase.lastIndexOf('ui')); 
console.log(frase.search('buenos dias')); 
console.log(frase.startsWith('bongiorno'));
console.log(frase.startsWith('good morning')); 
console.log(frase.startsWith('boa janta')); 
console.log(frase.endsWith('gabriel jampa')); 
console.log(frase.endsWith('ulala')); 
console.log(frase.endsWith('xbox')); 
