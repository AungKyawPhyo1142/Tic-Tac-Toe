let cells = document.querySelectorAll('.cell');
console.log(cells);
cells = Array.from(cells);
console.log(cells);

let currentPlayer="X";

let winningCombinations = [
    //rows
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    //cols
    [0,3,6],
    [1,4,7],
    [2,5,8],

    // diagonal
    [0,4,8],
    [2,4,6]
]

function checkForWinner(){
    winningCombinations.forEach(function(combination){
        let check = combination.every(idx => cells[idx].innerText.trim()==currentPlayer);

        if(check){
            highlightCells(combination);
        }

    })

}

function highlightCells(combination){

    combination.forEach(function(idx){
        cells[idx].classList.add('highlight')
    })

}

cells.forEach(function(cell){

    cell.addEventListener('click',function(){
        if(cell.innerText.trim() != "") return 
            cell.innerText=currentPlayer;
        checkForWinner( );
            currentPlayer = currentPlayer=="X" ? "O":"X";

    });

});