const log = console.log;

function uniteUnique(arr) {
    let finalArray = [];

    for (let i = 0; i < arguments.length; i++) {
        let arrayArguments = arguments[i];
        log(arrayArguments);
        // Loops through the array at hand
        for (let j = 0; j < arrayArguments.length; j++) {
            let indexValue = arrayArguments[j];

            // Checks if the value is already on the final array
            if (finalArray.indexOf(indexValue) < 0) {
                finalArray.push(indexValue);
            }
        }
    }

    log(finalArray);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);