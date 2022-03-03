/*
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

const eleLevel = document.getElementById('level');
const btnPlay = document.getElementById('play');
const eleGrid = document.querySelector('.grid');
const arrLevels = [144, 81, 49];

btnPlay.addEventListener('click', setupGame);


function setupGame() {
	eleGrid.innerHTML = ''; // cancella il contenuto della griglia per evitare che le celle vengano aggiunte alle precenti ad ogni click del bottone gioca

	// selezionare il livello
	const indexLevel = parseInt(eleLevel.value);
	console.log('indexLevel', indexLevel);
	const cellsCount = arrLevels[indexLevel];
	console.log('cellsCount', cellsCount);
	const cellsPerRow = Math.sqrt(cellsCount);


	// stampare la griglia in base al livello
	/* Inizio metodo con append alternativo a quello con innerHTML*/
	for (let cellNum = 1; cellNum <= cellsCount; cellNum++){
		const eleCell = document.createElement('div');
		eleCell.classList.add('cell');
		// eleCell.append(cellNum); // metodo 1
		eleCell.innerHTML = cellNum; // metodo 2
		eleCell.style.width = `calc(100% / ${cellsPerRow})`;
		eleCell.style.height = `calc(100% / ${cellsPerRow})`;
		eleCell.addEventListener('click', changeCellColor);
		eleGrid.append(eleCell);
		// console.log(cellNum);
	}
	/* fine metodo con append */

	// /* Inizio metodo con innerHTML alternativo a quello con append */
	// for (let cellNum = 1; cellNum <= cellsCount; cellNum++){
	// 	const htmlCell = `<div class="cell" style="width: calc(100% / ${cellsPerRow}); height: calc(100% / ${cellsPerRow})">${cellNum}</div>`;
	// 	eleGrid.innerHTML += htmlCell;
	// 	// console.log(cellNum);
	// }
	// const cells = [...eleGrid.querySelectorAll('.cell')]; // qui in realtà non serve trasformare la NodeList in Array (il ciclo for funziona anche sulla NodeList)
	// // console.log('tutte le celle', cells);
	// for (let i = 0; i < cells.length; i++) {
	// 	cells[i].addEventListener('click', changeCellColor);
	// }
	// /* fine metodo con innerHTML */


	// settare la logica del gioco
}

function changeCellColor(event) {
	// l'argomento event è facoltativo e se lo usate contiene informazioni sull'evento come coordinate del click, oppure tasto premuto, oppure elemeto cliccato (a seconda dell'evento che stiamo trattando) ma ATTENZIONE: this è quello che ci serve se vogliamo riferirci all'elemento sul quale abbiamo definito l'addEventListener cioè all'elemento in elemento.addEventListener('evento', funzione);
	this.classList.add('selected');
	// console.log(this);
	// console.log(event.target);
	// console.log(event);
}
