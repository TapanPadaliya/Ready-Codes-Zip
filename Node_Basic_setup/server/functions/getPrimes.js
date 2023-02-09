// program to print prime numbers between the two numbers

// take input from the user
const LN = 1;
const HN = 20;

console.log(`The prime numbers between ${LN} and ${HN} are:`);

// looping from LN to HN
for (let i = LN; i <= HN; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}