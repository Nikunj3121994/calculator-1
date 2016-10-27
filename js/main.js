// User Story: I can add, subtract, multiply and divide two numbers.

// User Story: I can clear the input field with a clear button.

// User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.


let calculation = [];
let currentString = '';

$(document).ready(function(){

    // let accumulator = '';

    // function clearAccumulator() {
    //     // clear whole memory
    //     accumulator = '';
    // }

    function clearAll() {
        currentString = '';
        calculation = [];
        console.log(currentString);
        $("#currentEntry-display").text('0');
        $("#accumulator-display").text('0')
    }

    function clearEntry() {
        // clear just what's in the currentString...char by char, then start removing elements from the calculation array one by one
        if (currentString) {
            currentString = currentString.slice(0, -1);
            console.log(currentString);
            console.log(calculation);
            $("#currentEntry-display").text(currentString ? currentString : "ohai");
            $("#accumulator-display").text(calculation.join(''))
            if (!currentString) {
                $("#currentEntry-display").text('0');
            }
        } else if (calculation.length > 0) {
            calculation.pop()
            console.log(currentString);
            console.log(calculation);
            $("#currentEntry-display").text('0');
            $("#accumulator-display").text(calculation.length > 0 ? calculation.join('') : '0')
        } else {
            console.log(currentString);
            console.log(calculation);
            $("#currentEntry-display").text('0');
            $("#accumulator-display").text('0')
        }
    }

    function equals() {
        if (currentString) {
            calculation.push(currentString)
            currentString = ''
        }
        // account for last element in calculation being a maths operator; remove it.
        if (calculation[calculation.length -1] === '+' ||
            calculation[calculation.length -1] === '-' ||
            calculation[calculation.length -1] === '*' ||
            calculation[calculation.length -1] === '/' )  {
            calculation.pop()
        }
        let answer = eval(calculation.join(''))
        console.log(answer);
        $("#currentEntry-display").text(answer);
        $("#accumulator-display").text(calculation.join(''))
    }

    $('button').on('click', function(e){
        target = e.target.value;

        if (target === 'CE') {
            clearEntry();
        } else if (target === 'AC') {
            clearAll();
        } else if (target === 'equals') {
            equals();
        } else if (target === '*' || target === '/' || target === '+' || target === '-' ) {
            if (currentString) {
                calculation.push(currentString);
                currentString = ''
                $("#currentEntry-display").text(calculation.join(''));
                $("#accumulator-display").text(calculation.join(''))
            }
            console.log('target is maths operator');
            // if target operator is the same as the last entry to the calc
            if ( calculation[calculation.length -1] === '+' ||
                calculation[calculation.length -1] === '-' ||
                calculation[calculation.length -1] === '*' ||
                calculation[calculation.length -1] === '/' )  {
                console.log('last entry to calculation is a maths operator');
                calculation[calculation.length -1] = target
                console.log(calculation);
                $("#currentEntry-display").text(calculation.join(''));
                $("#accumulator-display").text(calculation.join(''))
            } else {
                if (currentString) {
                    calculation.push(currentString)
                    currentString = ''
                    $("#currentEntry-display").text(calculation.join(''));
                    $("#accumulator-display").text(calculation.join(''))
                }
                calculation.push(target)
                console.log(calculation);
                $("#currentEntry-display").text(calculation.join(''));
                $("#accumulator-display").text(calculation.join(''))
            }
        // if already a dot in a number, don't add another
        } else if (target === '.' && currentString.includes('.')) {
            console.log('already got a dot');
        } else {
            currentString += target;
            console.log(currentString);
            $("#currentEntry-display").text(calculation.join('') + currentString);
            $("#accumulator-display").text(calculation.join(''))
        }
    }); // end of $('button').on('click', function(e){


    // FIXME: after equals is pressed, you should be able to do a plus x and carry on, or if a number is pressed it starts a fresh calc.
    // TODO: implement a max length to strings put into the calc window; they currently overflow to the right
    // TODO: create a isOperator() function to get rid of lines like:  calculation[calculation.length -1] === '-' ||
    // TODO: think clearEntry logic could do with some work to simplify it... think there's some dodgey logic there.
    // TODO: create an updateView() function to avoid all the jquery repetition.
    // TODO: implement other features like this one: https://codepen.io/FreeCodeCamp/full/rLJZrA/


 }); // end of document.ready
