 $( document ).ready(function() {

var correct;
var wrong;
var unanswered;

var timeRemaining = 30;
var currentQuestion = 0;
    
var questions = [
    {
        question: "What is the title of the first Harry Potter novel in America?",
        choices: ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Sorceress' Stone", "Harry Potter and the Philosopher's Stone", "Harry Plopper and the Wardrobe"],
        answer: 0
    },
    {
        question: "Which Harry Potter film grossed the least amount of money?",
        choices: ["Sorcerer's Stone", "Chamber of Secrets", "Prisioner of Azkaban", "Order of the Phoenix"],
        answer: 2
    },
    {
        question: "In the first film, what house is not assigned to a student?",
        choices: ["Hufflepuff", "Slytherin", "Ravenclaw", "Gryffindor"],
        answer: 2
    },

    ];

$(".start").on("click", newGame)

function newGame() {
    console.log("new game!");
    
    correct = 0;
    wrong = 0;
    unanswered = 0;
    currentQuestion = 0;

    $("#wrapper").hide();

    console.log(questions[0].question);
    $("#questionLine").html(questions[0].question);
    for (var i = 0; i < questions[0].choices.length; i++) {
        var button = $("<button>");
        button.addClass("btn1");
        button.attr("data-answer", questions[currentQuestion].choices[i]);
        button.text(questions[currentQuestion].choices[i]);
        $("#button1").append(button);
    }



}

    });
    

    // On app launch: show the Start box and h1 title, nothing else.

    // Clicking on "Start", clears the Start button and loads the question and answers, and displays clock at bottom middle of screen, and score at top right of screen.

        // If correct: cut to next question and increment Score by 1.

        // If wrong, or time runs out: cut to "restart" button that says 'Try Again'. Remove all other buttons, the question and timer.

    // Start at beginning of function, resetting score and timer.



//results = score and time left
