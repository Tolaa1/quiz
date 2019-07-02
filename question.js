function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//checking correct answer
Question.prototype.correctAnswer = function(choice) {
    const userChoice = (choice === this.answer);
    return userChoice;
}