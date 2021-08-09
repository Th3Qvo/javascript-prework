// funkcja printMessage za pomocą zmiennej div tworzy element DIV,
// następnie wstawia do niego znaki za pomocą funkcji innerHTML i przypisuje je argumentowi msg,
// następnie wstawia za pomocą funkcji appendChild zmienną div w elemencie o id = messages jako ostatnie dziecko w tym elemencie

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}