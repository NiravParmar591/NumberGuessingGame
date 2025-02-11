let rand_num = Math.floor(Math.random() * 100) + 1;
let btn = document.querySelector(".btn");
let player1_score = 0;
let player2_score = 0;
let play1_move = 0;
let play2_move = 0;
let player1 = document.querySelector(".s_p1");
let player2 = document.querySelector(".s_p2");
let turn = true;
let round = 1;
let moves = document.querySelector(".num_moves");
let display_round = document.querySelector(".num_round");
let massage = document.querySelector(".massege");

console.log("round " + round);
console.log("random number : " + rand_num);

btn.addEventListener("click", () => {
    let disp = document.querySelector(".display");
    let a1 = document.querySelector(".player1");
    let a2 = document.querySelector(".player2");
    let guess = document.getElementById("num");
    let guess_num = guess.value;

    if (guess_num > 100 || guess_num < 1) {
        alert("Enter valid input")
    }

    if (rand_num > guess_num) {
        disp.innerHTML = "your number is small";
        disp.style.color = "red";

        if (turn) {
            play1_move += 1;
            moves.innerText = play1_move;
        }
        else {
            play2_move += 1;
            moves.innerText = play2_move;
        }
    }
    else if (rand_num < guess_num) {
        disp.innerHTML = "your number is big";
        disp.style.color = "red";

        if (turn) {
            play1_move += 1;
            moves.innerText = play1_move;
        }
        else {
            play2_move += 1;
            moves.innerText = play2_move;
        }
    }
    else {
        console.log("guss_number : " + guess_num);

        if (turn) {
            a1.classList.remove('active');
            a2.classList.add('active');
            console.log("player1 is complete the turn")
            play1_move += 1;
            moves.innerText = play1_move;
            console.log("player1 move : " + play1_move);
            disp.innerHTML = `player1 guess number in ${play1_move} moves`;
            turn = false;
        }
        else {
            a2.classList.remove('active');
            a1.classList.add('active');
            console.log("player2 is complete the turn")
            play2_move += 1;
            moves.innerText = play2_move;
            console.log("player2 move : " + play2_move);
            disp.innerHTML = `player2 guess number in ${play2_move} moves`;
            turn = true;
        }

        disp.style.color = "green";
        rand_num = Math.floor(Math.random() * 100) + 1;
        console.log("new random number : " + rand_num);
        moves.innerText = 0;
        check_round_winner();
        check_winner();
        reload_game();
    }
    guess.focus();
});

const check_round_winner = () => {
    if (play1_move != 0 && play2_move != 0) {
        if (play1_move < play2_move) {
            console.log(`player1 is win the round ${round}`);
            player1_score += 1;
            player1.innerText = player1_score;
        }
        else if (play1_move > play2_move) {
            console.log(`player2 is win the round ${round}`);
            player2_score += 1;
            player2.innerText = player2_score;
        }
        else {
            console.log(`round ${round} is tia`);
        }
        play1_move = 0;
        play2_move = 0;
        round++;
        console.log("round " + round);
        display_round.innerText = round;
    }
}

const check_winner = () => {
    if (round > 1) {
        massage.classList.add("display_massege");

        if (player1_score > player2_score) {
            document.querySelector(".win_massege").innerText = "PLAYER1 IS WIN";
        }
        else if (player1_score == player2_score) {
            document.querySelector(".win_massege").innerText = "MATCH IS TIA";
        }
        else {
            document.querySelector(".win_massege").innerText = "PLAYER2 IS WIN";
        }
    }
};

const reload_game = () => {
    let reload_btn = document.querySelector(".reset_btn");

    reload_btn.addEventListener("click", () => {
        massage.style.display = "none";
        player1_score = 0;
        player2_score = 0;
        play1_move = 0;
        play2_move = 0;
        round = 1;
        display_round.innerText = round;
        player1.innerText = player1_score;
        player2.innerText = player2_score;
        document.querySelector(".display").innerHTML = "";
        document.getElementById("num").value = "";
    })
}