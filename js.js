function Calendar(enterYear, enterMonth) {

	(function(a, b) {
		let date = new Date(a, b - 1);
		let getMonth = date.getMonth()
		let month = [`январь`, `февраль`, `март`, `апрель`, `май`, `июнь`, `июль`, `август`, `сентябрь`, `октябрь`, `ноябрь`, `декабрь`];
		let year = date.getFullYear();
		let divYear = document.createElement(`div`);
		let divMonth = document.createElement(`div`);
		divYear.textContent = `${year} год`;
		divMonth.textContent = month[getMonth];
		document.body.appendChild(divYear);
		document.body.appendChild(divMonth);
	}(enterYear, enterMonth));


	let table = document.createElement(`table`);
	for (t = 0; t != 7; t++) {
		let th = document.createElement(`th`);
		let dayofweek = [`вс`, `пн`, `вт`, `ср`, `чт`, `пт`, ` сб`];
		th.textContent = dayofweek[t];



		table.appendChild(th)
	};


	for (i = 0; i != 5; i++) {
		let tr = document.createElement(`tr`);
		table.appendChild(tr)
		for (k = 0; k != 7; k++) {
			let td = document.createElement(`td`);
			td.style.border = '1px solid black';


			tr.appendChild(td);


		}

	};



	document.body.appendChild(table)



	let colDayInMonth = colDayIn(enterYear, enterMonth) //30 or 31 day in mont



	let td = document.body.querySelectorAll(`TD`);

	let firstNumber = getNumberFirstDayOfMonth(enterYear, enterMonth);

	//console.log(colDayInMonth)

	if (firstNumber == 0) {
		for (let u = 0; u != colDayInMonth; u++) {
			td[u].textContent = u + 1
		} //пишем u +1 потому, что счет в массиве наичнается с нуля
	} else {
		for (let u = 1; u != (colDayInMonth + firstNumber); u++) {
			if (u >= firstNumber) {
				td[u].textContent = (u + 1) - firstNumber
			} //пишем u +1 потому, что счет в массиве наичнается с нуля
		}
	}


	table.setAttribute(`onselectstart`, `return false`)



	function colDayIn(yaer, month) {

		let date = new Date(yaer, month, 0);
		return date.getDate();
	}



	function getNumberFirstDayOfMonth(yaer, month) {

		let date = new Date(yaer, month - 1, 1);
		let firstNumber = date.getDay();
		return firstNumber
	};
}



let inputYear = document.createElement(`input`);

let placeholderYear = document.createElement(`placeholder`);

let placeholderMonth = document.createElement(`placeholder`);

let inputMonth = document.createElement(`input`);

let button = document.createElement(`button`);
inputYear.setAttribute(`placeholder`, `enter the year`)
inputMonth.setAttribute(`placeholder`, `enter number of the monthr`)



inputYear.appendChild(placeholderYear);

inputMonth.appendChild(placeholderMonth);
button.addEventListener(`click`, click);
document.body.appendChild(inputYear);
document.body.appendChild(inputMonth);
document.body.appendChild(button);

button.textContent = `ok`;

function click() {
	let g = new Calendar(inputYear.value, inputMonth.value);

	document.body.removeChild(inputYear);
	document.body.removeChild(inputMonth);
	document.body.removeChild(button);

};