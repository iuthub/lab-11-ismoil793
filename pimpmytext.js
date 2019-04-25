var textArea = document.querySelector('#text');
var ch1 = document.getElementById('ch1');

function btnClick () {
	textArea.style.fontSize = '24pt';
}

function checkBoxClicked () {
	if (ch1.checked) {
		textArea.style.fontWeight = '800';
		textArea.style.color = 'green';
		textArea.style.textDecoration = 'underline';
	}
	else {
		textArea.style.fontWeight = '500';
		textArea.style.color = '#000';
		textArea.style.textDecoration = 'none';
	}
}

function btn2Click() {
	str = textArea.value;
	parts =str.split(".");
	str = parts.join('-izzle!');
	textArea.value = str;
}