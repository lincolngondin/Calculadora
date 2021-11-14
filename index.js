text = document.getElementById('actual_numbers');
text.onmousedown = ()=>{
	alert('Ola mundo')
};

const changeText = ({srcElement:elem})=>{
	text.textContent += elem.innerText;
}

botoes = document.getElementsByClassName('number');
for(let i = 0; i < botoes.length; i++){
	botoes[i].onmousedown = changeText;
}