$(document).ready(function(){
  
  $("#remaining-time").hide();
  $("#start").on('click', trivia.startGame);
  $(document).on('click' , '.option', trivia.guessChecker);
  
})

var trivia = {
  correct: 0,
  wrong: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 20,
  timerOn: false,
  timerId : '',

  questions: {
    q1: "What is the title of the first Harry Potter novel in America?",
    q2: "Which Harry Potter film grossed the least amount of money?",
    q3: "In the first film, what house is not assigned to a student?",
    q4: "In The Prisioner of Azkaban, who steals the Marauders Map?",
    q5: "Who is poisioned in the Half Blood Price?",
    q6: "What form does Hermione's Patronus take?",
    q7: "What is Draco Malfoy's middle name?"
  },
  options: {
    q1: ["Sorcerer's Stone", "Sorceress' Stone", "Philosopher's Stone", "The Lion & the Wardrobe"],
    q2: ["Chamber of Secrets", "Prisioner of Azkaban", "Order of the Phoenix", "Half Blood Prince"],
    q3: ["Hufflepuff", "Slytherin", "Ravenclaw", "Gryffindor"],
    q4: ["Hermione & Ron", "Fred & George", "Ron & Harry", "Harry's Parents"],
    q5: ["Neville Longbottom", "Seamus Finnigan", "Ronald Weasley", 'Albus Dumbledore'],
    q6: ["Otter", "Bear", "Deer", "Michael Phelps"],
    q7: ["Vincent", "Crabbe", "Tonks", "Lucius"]
  },
  answers: {
    q1: "Sorcerer's Stone",
    q2: "Prisioner of Azkaban",
    q3: "Ravenclaw",
    q4: "Fred & George",
    q5: "Ronald Weasley",
    q6: "Otter",
    q7: "Lucius"
  },

  startGame: function () {
    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.wrong = 0;
    trivia.unanswered = 0;
    clearInterval(trivia.timerId);


    $('#game').show();
    $('#results').html('');
    $('#timer').text(trivia.timer);
    $('#start').hide();
    $('#remaining-time').show();

    trivia.nextQuest();

  },
  startGame: function () {
    document.getElementById('audio').play();
    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.wrong = 0;
    trivia.unanswered = 0;
    clearInterval(trivia.timerId);

    $('#game').show();
    $('#results').html('');
    $('#timer').text(trivia.timer);
    $('#start').hide();
    $('#remaining-time').show();

    trivia.nextQuestion();

  },
  nextQuestion: function () {
    trivia.timer = 10;
    $('#timer').removeClass('last-seconds');
    $('#timer').text(trivia.timer);

    if (!trivia.timerOn) {
      trivia.timerId = setInterval(trivia.timerRunning, 1000);
    }
    var questionContent = Object.values(trivia.questions)[trivia.currentSet];
    $('#question').text(questionContent);

    var questionOptions = Object.values(trivia.options)[trivia.currentSet];

    $.each(questionOptions, function (index, key) {
      $('#options').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
    })

  },
  timerRunning: function () {
    if (trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length) {
      $('#timer').text(trivia.timer);
      trivia.timer--;
      if (trivia.timer === 4) {
        $('#timer').addClass('last-seconds');
      }
    } else if (trivia.timer === -1) {
      trivia.unanswered++;
      trivia.result = false;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html("<h3>Out of time! The answer was <strong>" + Object.values(trivia.answers)[trivia.currentSet] + "</strong></h3>");
    } else if (trivia.currentSet === Object.keys(trivia.questions).length) {

      $('#results')
        .html('<h3>Thanks for playing!</h3>' +
          '<p>Correct: ' + trivia.correct + '</p>' +
          '<p>Wrong: ' + trivia.wrong + '</p>' +
          '<p>Unanswered: ' + trivia.unanswered + '</p>' +
          '<p>Play again?</p>');

      $('#game').hide();
      $('#start').show();
      document.getElementById('audioTwo').play()
    }

  },
  guessChecker: function () {
    var resultId;
    var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];

    if ($(this).text() === currentAnswer) {
      $(this).addClass('btn-success').removeClass('btn-info');

      trivia.correct++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Correct Answer!</h3>');
    } else {
      $(this).addClass('btn-danger').removeClass('btn-info');

      trivia.wrong++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $("#results").html("<h3>Wrong! <strong>" + currentAnswer + "</strong> is the right answer </h3>");
    }

  },

  guessResult: function () {

    trivia.currentSet++;

    $('.option').remove();
    $('#results h3').remove();

    trivia.nextQuestion();

  }

}