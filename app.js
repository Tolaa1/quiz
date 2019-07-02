

//array of questions objects
const questions = [
    new Question ("Which of the following is not a programming language?",["Python","C#","Javascript","HTML"], "HTML"),
    new Question("Which of these is not a back-end language?",["Javascript","Ruby","HTML5","C#"], "Javascript"),
    new Question("Where is Waldo really?",["Antarctica","Exploring the Pacific Ocean","Sitting in a tree","Minding his own business, so stop asking"], "Minding his own business, so stop asking" ),
    new Question("What is the best site ever created?", ["SitePoint","Simple Steps Code","Trick question; they're both the best","All the above"], "Trick question"),
    new Question("Who is the stongest out the below options",["Superman","The Terminator","Waluigi", "All of the above"], "Waluigi"),
    new Question("Which these is not a front-end language?",["Ruby","CSS++","Vanilla JS","HTML"],"Ruby"),
    new Question("Who scored the first goal for Liverpool FC in 2019 UEFA Champions League final?",["Ronney","Mane","Mo Salah","Firmino"], "Mo Salah"),
    new Question("Who is the father of isaac in the bible?",["Noah","Abraham","Jacob","David"],"Abraham"),
    new Question("Who did God told to be an Ark in the bible?",["Isaac","John","Noah","Daaron"], "Noah"),
    
];

//this is the new instance of the class Quiz
const quiz = new Quiz(questions);

populate();


function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
    
    //here we bind the question to HTLM     
    //show question
    const element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    //show choices
    const choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i< choices.length; i++) {
        const element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        userChoice("btn" + i, choices[i]);
    }
}
     //showProgress();
};

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your scores:" + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

function userChoice(id, userAnswer) {
    const button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(userAnswer);
        //go to next question 
        populate();
    }
};
    
function showProgress() {
    const currentQuestionNumber = quiz.questionIndex + 1;
    const element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
}
showProgress() ;



