 $( document ).ready(function() {

var correct;
var wrong;
var unanswered;

var timeRemaining = 30;
var currentQuestion = 0;
    
var questions = [
    {
        question: "What is the title of the first Harry Potter novel in America?",
        choices: ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Sorceress' Stone", "Harry Potter and the Philosopher's stone", "Harry Plopper and the Wardrobe"],
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

    ];
    

    // On start: show the Start box and h1 title, nothing else.

    // Clicking on "Start", clears the start button and loads the question and answers, and display clock at bottom middle of screen, display score at top right of screen.

        // If correct: snap to next question and increment score by 1.

        // If wrong, or time runs out: snap to "restart" button that says 'Try Again'.

    // Start at beginning of function, resetting score and timer.

}