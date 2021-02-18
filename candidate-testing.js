const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "; ;
let correctAnswer = "Sally Ride"; ;
let candidateAnswer = "";
let questions =["Who was the first American woman in space? " ,"True or false: 5000 meters = 5 kilometers.", "(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers= [];
let grade ;
let numberOfCorrectAnswer =0 ;
let result ;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("candidate Name :  ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++) {
candidateAnswers[i] = input.question(questions[i]);
console.log(`your answer : ${candidateAnswers[i]}`);
console.log(`Correct Answer : ${correctAnswers[i]}`);

if (candidateAnswers[i] == correctAnswers[i].toLowerCase()) {
     candidateAnswers[i].toLowerCase();
     numberOfCorrectAnswer++;
     //console.log("total correct answers =", numberOfCorrectAnswer);
     //console.log("------------------------------------");
}
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

 grade = numberOfCorrectAnswer / (questions.length) * 100
 //console.log("---------------GRADE---------------------");
 console.log(`>>> Overall Grade: ${grade} (${numberOfCorrectAnswer} of ${questions.length} responses correct) <<<`);

  if (grade >= 80 ) {
    result = "PASSED";
  } else {
    result = "FAILED";
  } 
  //console.log("-----------------STATUS-------------------");
console.log(`>>> Status: ${result} <<<`);
 return grade;
  }

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};