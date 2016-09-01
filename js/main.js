// User Story: I can add, subtract, multiply and divide two numbers.

// User Story: I can clear the input field with a clear button.

// User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.


$(document).ready(function(){

    var currentString = '';
    // var accumulator = '';

    // function clearAccumulator() {
    //     // clear whole memory
    //     accumulator = '';
    // }

    function clearAll() {
        // clear everything
        currentString = '';
        console.log(currentString);
        $("#currentEntry-display").text('0');
    }

    function clearEntry() {
        // clear just what's in the currentString...char by char
        currentString = currentString.slice(0, -1);
        if (currentString === '') {
            $("#currentEntry-display").text('0');
        } else {
            console.log(currentString);
            $("#currentEntry-display").text(currentString);
        }
    }

    function equals() {
        answer = eval(currentString);
        console.log(answer);
        $("#currentEntry-display").text(answer);
        currentString = '';
    }

    $('button').on('click', function(e){
        target = e.target.value;

        if (target === 'CE') {
            clearEntry();
        } else if (target === 'AC') {
            clearAll();
        } else if (target === 'equals') {
            equals();
        } else {
            currentString += target;
            console.log(currentString);
            $("#currentEntry-display").text(currentString);
        }



    }); // end of $('button').on('click', function(e){


    // TODO: only allow a single dot char per number string. might be complicated.
    // TODO: prevent multiple operator entries in a row, e.g. ++, or ***
    // TODO: implement an accumulator row at top of display
    // TODO: implement other features like this one: https://codepen.io/FreeCodeCamp/full/rLJZrA/


 }); // end of document.ready
