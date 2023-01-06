const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');

gridBtn.addEventListener('click', clickButton);
listBtn.addEventListener('click', clickButton);

function clickButton(event) {
	event.preventDefault();
	let newStyle = event.target.id;
	newStyle = newStyle.replace('Btn', '');
	const element = document.getElementById("card-wrapper");
  element.classList.remove("grid");
	element.classList.remove("list");
	element.classList.add(newStyle);
}