var button = document.getElementById('button');
var user = document.getElementById('user');
// let ul = document.querySelector("ul");
// var a = 0;
// function userLength(){
// 	return user.value.length
// }
// function createlist(){
// 	let li = document.createElement('li');
// 	li.appendChild(document.createTextNode(user.value))
// 	ul.appendChild(li);
// 	user.value = '';
// }
// function addlist(){
// 	if (userLength() > 0){
// 		createlist()
// 	}else{
// 		alert('your area is empty!')
// 	}
// }

// function addlistkeypress(){
// 	if (userLength() > 0 && event.keyCode === 13){
// 		createlist()
// 	}
// }
// button.addEventListener('click', addlist);

// user.addEventListener('keypress', addlistkeypress)

// let matn = "salom";

// alert(`hammaga ${matn}`);
let body = document.getElementById('body');
let color1 = document.querySelector('.color1')
let color2 = document.querySelector('.color2')
var button1 = document.getElementById("button1");
// function click(){
// 	// console.log(color1.value);
// 	body.style.background='red';	
// }
// button1.addEventListener('click', click)

function setgradient(){
	body.style.background= 
	'linear-gradient(to right, '
	+ color1.value 
	+ ', ' 
	+ color2.value 
	+ ")"; 

}
// color1.addEventListener('input', setgradient);
// color2 .addEventListener('input', setgradient);
let table = document.querySelector('table');
function addclick(){
	if(user.value.length > 0){
		let tr = document.createElement('tr');
		let tr1 = tr.appendChild(document.createElement('td'));
		tr1.appendChild(document.createTextNode(user.value))
		table.appendChild(tr);
		user.value ='';
	}

}
function keypress(event){
	if(user.value.length > 0 && event.keyCode === 13){
		let tr = document.createElement('tr');
		let tr1 = tr.appendChild(document.createElement('td'));
		tr1.appendChild(document.createTextNode(user.value))
		table.appendChild(tr);
		user.value ='';
	}

}
button.addEventListener('click', addclick);
let butclose = document.getElementById('butclose')
let butopen = document.getElementById('butopen')
function close(){
	let img = document.getElementById('img1');
	img.style.opacity='0';
	img.style.display='None';
	img.src='430.png';
}
function open(){
	let img = document.getElementById('img1');
	img.style.opacity='1';
	img.style.display='block';
}
butopen.addEventListener('click', open);   
butclose.addEventListener('click', close);
function yesno(o){
	if (o >=10){
		return true;
	}else{
		return false;
	}
}
const multiply = (a, b) => (c) => a(b(c));
const ye = (o) => yesno(o);
const sum = (num) => num+num;
alert(multiply(ye, sum)(5)) 
const multiply1 = (a) => (b) =>(a*b);
const multiply5 = multiply1(5);


const array = [1,2,4,6,8];
const newarray = array.map((num) => {
	return num *2
});
console.log(newarray)
  