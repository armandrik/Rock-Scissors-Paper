let pc_array = ['rock', 'scissors', 'papper'];
let score = [0, 0];
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const papper = document.getElementById('papper');
const pc_move = document.getElementById('pc-move');
const player_move = document.getElementById('player-move');
const res = document.getElementById('res');
const player_score = document.getElementById("player-score");
const pc_score = document.getElementById('pc-score');

rock.addEventListener('click', rockFunction);
scissors.addEventListener('click', scissorsFunction);
papper.addEventListener('click', papperFunction);

function rockFunction() {
    player_move.innerHTML = "Playere : ROCK";
    let pc_res = Math.floor(Math.random() * pc_array.length);
    if (pc_array[pc_res] == "rock") {
        pc_move.innerHTML = "Computer : ROCK";
        res.innerHTML = "Equal";
        res.style.color="white";
    }
    else if (pc_array[pc_res] == "scissors") {
        pc_move.innerHTML = "Computer : SCISSORS";
        res.innerHTML = "You Won";
        res.style.color="green";
        score[0]++;
        player_score.innerHTML = "PLAYER : " + score[0];
    }
    else if (pc_array[pc_res] == "papper") {
        pc_move.innerHTML = "Computer : PAPPER";
        res.innerHTML = "You Lost";
        res.style.color="red";
        score[1]++;
        pc_score.innerHTML = "COMPUTER : " + score[1];
    }
}

function scissorsFunction() {
    player_move.innerHTML = "Playere : SCISSORS";
    let pc_res = Math.floor(Math.random() * pc_array.length);
    if (pc_array[pc_res] == "rock") {
        pc_move.innerHTML = "Computer : ROCK";
        res.innerHTML = "You Lost";
        res.style.color="red";
        score[1]++;
        pc_score.innerHTML = "COMPUTER : " + score[1];
    }
    else if (pc_array[pc_res] == "scissors") {
        pc_move.innerHTML = "Computer : SCISSORS";
        res.innerHTML = "Equal";
        res.style.color="white";
    }
    else if (pc_array[pc_res] == "papper") {
        pc_move.innerHTML = "Computer : PAPPER";
        res.innerHTML = "You Won";
        res.style.color="green";
        score[0]++
        player_score.innerHTML = "PLAYER : " + score[0];
    }
}

function papperFunction() {
    player_move.innerHTML = "Playere : PAPPER";
    let pc_res = Math.floor(Math.random() * pc_array.length);
    if (pc_array[pc_res] == "rock") {
        pc_move.innerHTML = "Computer : ROCK";
        res.innerHTML = "You Won";
        res.style.color="green";
        score[0]++;
        player_score.innerHTML = "PLAYER : " + score[0];
    }
    else if (pc_array[pc_res] == "scissors") {
        pc_move.innerHTML = "Computer : SCISSORS";
        res.innerHTML = "You Lost";
        res.style.color="red";
        score[1]++;
        pc_score.innerHTML = "COMPUTER : " + score[1];
    }
    else if (pc_array[pc_res] == "papper") {
        pc_move.innerHTML = "Computer : PAPPER";
        res.innerHTML = "Equal";
        res.style.color="white";
    }
}