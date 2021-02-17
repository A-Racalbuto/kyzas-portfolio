printPrimeNumbers(10);
printPrimeNumbers(20);

function printPrimeNumbers(maxNum) {
    for (let number = 2; number < maxNum; number++) {
        const isPrime = checkPrime(number);

        if(isPrime) {
            console.log(number);
        }
    }
}

function checkPrime(number) {
    for (let previous = 2; previous < number; previous++) {
        if (isDivisibleBy(number, previous)) {
            return false;
        }
    }

    return true;
}


function isDivisibleBy(num1, num2) {
    return num1 % num2 === 0
}