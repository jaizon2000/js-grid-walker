/* GRID WALKER */
'use strict';

// Add a bunch of div elems to <main> 
// 40/row
for (let row = 1; row < 25+1; row++) {
    for (let col = 1; col < 40+1; col++) {
        // col = x, row = y
        document.getElementById('main').innerHTML += "<div id='cell" + col + "-" + row + "'></div>";

    }
}

// Global Vars for grid walker
let walkerCol = 20;
let walkerRow = 10;


// HIGHLIGHT current walker cell
let walkerId = 'cell' + walkerCol + "-" + walkerRow;
document.getElementById(walkerId).classList.add('active'); // <id='walkerId'>cell__-__

// EVENT LISTENER - Change grid walker location on key doww
document.addEventListener('keydown', checkKeyPress);

function checkKeyPress() {
    // Get key code //
    /* console.log(event.keyCode); */


    if (walkerCol <= 38 && walkerCol > 0 && walkerRow < 24 && walkerRow > 0) {
        // Remove current active class
        walkerId = 'cell' + walkerCol + "-" + walkerRow; // Curent Location
        document.getElementById(walkerId).classList.remove('active');

        // TEST coords
        console.log(walkerCol, walkerRow);

        // PRESS ARROW KEYS
        if (event.keyCode == 37) { // LEFT
            walkerCol--;
            walkerId = 'cell' + walkerCol + "-" + walkerRow;
            document.getElementById(walkerId).classList.add('active');


        } else if (event.keyCode == 39) { // RIGHT
            walkerCol++;
            walkerId = 'cell' + walkerCol + '-' + walkerRow;
            document.getElementById(walkerId).classList.add('active');


        } else if (event.keyCode == 38) { // UP
            walkerRow--;
            walkerId = 'cell' + walkerCol + '-' + walkerRow;
            document.getElementById(walkerId).classList.add('active');


        } else if (event.keyCode == 40) { // DOWN
            walkerRow++;
            walkerId = 'cell' + walkerCol + '-' + walkerRow;
            document.getElementById(walkerId).classList.add('active');


            // Add active class to NEW current location
            walkerId = 'cell' + walkerCol + "-" + walkerRow;
            document.getElementById(walkerId).classList.add('active');

        }
    } else {
        console.log('else');
        if (event.keyCode == 37 || event.keyCode == 39) { //left || right
            if (walkerCol <= 0) {
                walkerCol = 1;

            } else if (walkerCol >= 38) {
                walkerCol = 38;
            }

        } else if (event.keyCode == 38 || event.keyCode == 40) { // up || down
            if (walkerRow <= 1) {
                walkerRow = 1;
                document.getElementById(walkerId).classList.add('active');

            } else if (walkerRow > 23) {
                walkerRow--;
                document.getElementById(walkerId).classList.add('active');
            }
        }
    }
}