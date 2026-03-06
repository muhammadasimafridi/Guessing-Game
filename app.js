let userNum = +prompt("Enter a number. The guessing range will be from 1 to that number.");
let guessNum = +prompt("Guess a number. (Enter 0 while exiting.)").toLowerCase();
let num = Math.floor(Math.random() * userNum) + 1;
while (true) {
    if (guessNum == 0){
        console.log("You quit the game.");
        break;
    } else if (num === guessNum){
        console.log("Congratulation, You Guess the right One. The guess number is", num);
        break;
    } else{
        if (num > guessNum){
            guessNum = +prompt("Your guess is small, try large number. (Enter 0 while exiting.)");
        } else{
            guessNum = +prompt("Your guess is large, try small number. (Enter 0 while exiting.)");
        }
    }
}