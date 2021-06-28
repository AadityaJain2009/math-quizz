player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " - " + player1_score;
document.getElementById("player2_name").innerHTML = player2_name + " - " + player2_score;



question_turn = "player1";
answer_turn = "player2"

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);
    question = "<h4>" + number1 + " X " + number2 + "</h4>";

    input_box = "<br>Answer : <input type='text' id='input_check_box'>";

    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row = question + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    document.getElementById("player1_score").value = player1_score;
    document.getElementById("player2_score").value = player2_score;

    // Validating Answer and Update Score
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            p1_score= document.getElementById("player1_score").value;
            update_player1_score = p1_score + 1;
            document.getElementById("player1_name").innerHTML = player1_name + " - " + player1_score;
            document.getElementById("player2_name").innerHTML = player2_name + " - " + player2_score;
        }
        else {
            p2_score= document.getElementById("player2_score").value;
            update_player2_score = p2_score + 1;
            document.getElementById("player1_name").innerHTML = player1_name + " - " + player1_score;
            document.getElementById("player2_name").innerHTML = player2_name + " - " + player2_score;
        }

        // Changing Question and Answer Turns
        if (question_turn == "player1" && answer_turn == "player2") {
            question_turn = "player2"
            answer_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
        }
        else {
            question_turn = "player1"
            answer_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
        }        
    }
    document.getElementById("input_check_box").value = "";
}