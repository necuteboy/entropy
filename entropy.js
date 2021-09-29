let fs = require('fs');//переменная fs-работа с файловой системой
let arg = process.argv;//объект для работы с элементами ком строки
let inText;
let entropy=0;
let i = 0, n = 1;
let testString = '';
let shet=0;
// to do : обработка ошибок try catch 
inText = fs.readFileSync('input.txt'); //байтовый буфер
inText = inText.toString();
let alph=new Array();//объект "типа" массив
//инициализация массива alph, ключами являются все буквы алфавит а значениями 0 
for (i=0;i<inText.length;i++){
	alph[inText.charAt(i)]=0
}
for (i=0;i<inText.length;i++){
	if (alph[inText.charAt(i)]==0){
		shet+=1;
	}
	alph[inText.charAt(i)]++;
}
console.log(alph);
for (i in alph){
	alph[i]/=inText.length;
}
for (i in alph){
	entropy-=alph[i]*(Math.log(alph[i])/Math.log(shet));
}
if (shet==1){
	entropy=0;
}
console.log(alph)
console.log(entropy)
