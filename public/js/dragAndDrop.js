function dragOver()
{
	event.preventDefault();
}

function drag()
{
	// debugger
	event.dataTransfer.setData('Text',event.target.id);
	// debugger
}

function drop()
{
	event.preventDefault();
	var data= event.dataTransfer.getData('Text');
	var div = document.createElement('div');
	// div.id = 'zxczxc';
	div.className = 'drop-div';
	div.innerText = "divvvv";
	div.style.margin = '20px 30px';
	if (event.target.className === 'content') {
		event.target.appendChild(div);
	} else {
		document.getElementById('qwe').insertBefore(div, event.target);
	}
}

function dragOverPrevent () {
	console.log("zxc")
	// return true
}

function dropPrevent () {
	console.log("zxc")
}