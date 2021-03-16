//computer play function returs Rock or papper or scissors
function computerPlay() {
    let randomNum = Math.round(Math.random() * 3);
    if (randomNum === 0) {
        return 'Rock';
    } else if (randomNum === 1) {
        return 'Paper';
    } else {
        return "Scissors";
    }
}





