"use strict";
console.log('What do you know about Terra?');
var score = 0;
var userName;
// possibleAnswers=[yes, y, no, n]

var userName = prompt('What is your name?');
console.log('What is the users name?');
console.log(userName);
/*Prompt for the first question, checks response and gives alert based on response.  
If player got answer correct, they get a point*/

var answer = prompt(userName + ', do you think that Terra has been a teacher in only one school?');

console.log(answer.toLowerCase());


//made change... added array of possible answers.
var possibleAnswers = ['y', 'yes', 'n', 'no']

//check to see if userName answer matches answers in array
if (answer.toLowerCase() === possibleAnswers[2, 3]) {
    alert('Woohoo! You are correct. Terra has taught at three school in the past 18 years!');
    score++;
} else {
    alert('Sorry, ' + userName + ' that is not correct. Terra has taught at three schools in the past 18 years!');
};
//check to see that they answer doesn't include extra spaces
//console.log()-- check to see that answer is correct
console.log('Taught in one building? Expect no');
console.log(answer.toLowerCase());
console.log('Points earned?');
console.log(score);
alert('So far, you have ' + score + ' points.');

//user being asked the second question
answer = prompt(userName + ', do you think Terra was a collegiate athlete?');

//checking to see if the second answer matches the answers in the array
if (answer.toLowerCase() === possibleAnswers[0, 1]) {
    alert('Correct. Terra was on the swim team at UNI as well as she played rugby. Go Panthers!');
    score++;
} else {
    alert('Wa wa. Sorry,' + userName + ' but Terra actually swam for UNI as well as rugby for UNI.');
};
console.log('Terra a collegiate athlete?  Expect yes');
console.log(answer.toLowerCase());
console.log('Points earned?');
console.log(score);
alert(userName + ' you have ' + score + ' points.');

//checking to see if the third answer matches the answers in the array
answer = prompt('Is Terra a mom?');
//answer is yes
//checking to see if userName answers match correct choice
if (answer.toLowerCase() === possibleAnswers[0, 1]) {
    alert('You rock,' + userName + '. Terra is a mom of two boys.');
    score++;
} else {
    alert('Sorry,' + userName + ' no point for you. Terra has two boys');
};
console.log('Is Terra a mom? Expect yes');
console.log(answer.toLowerCase());
console.log('Points earned?');
console.log(score);
alert(userName + ', you have ' + score + ' points.');

//checking to see if the fourth answer matches the answers in the array
answer = prompt('Does Terra bring a Mac to class?');
//answer is no
//checking to see if user answer match correct choice
if (answer.toLowerCase() === possibleAnswers[2, 3]) {
    alert(userName + ', you are on FIRE! Terra uses a pc.');
    score++;
} else {
    alert('Silly,' + userName + ' Terra doesn\'t bring a Mac.');
};
console.log('brings Mac to class? Expect no');
console.log(answer.toLowerCase());
console.log('Points earned?');
console.log(score);
alert('You have ' + score + ' points. Question 5 coming up!');

//asking fifth question
answer = prompt('Does Terra drink coffee?');

//checking to see if the fifth answer matches the answers in the array
//answer is yes
if (answer.toLowerCase() === possibleAnswers[0, 1]) {
    alert(userName + ', you guessed right! Terra LOVES coffee!');
    score++;
} else {
    alert('What, who doesn\'t love coffee?');
};
console.log('Terra drinks coffee? Expect yes');
console.log(answer.toLowerCase());
console.log('Points earned?');
console.log(score);
alert(userName + ' you currently have ' + score + ' points.');

//Asking sixth question.  Answer is an integer and must give four tries

//checking to see if the sixth answer matches the answer 
   var answerSix = prompt('How many degrees from college has Terra earned?');
   for (var i = 0; i < 4; i++) {
    if (answerSix === 3) {
        console.log('Number of degrees earned? Expect 3');
        console.log(answerSix);
        i = 5;
        alert(userName + ', you guessed right.  Terra has three degrees. Read more about it on her About Me page.');
        score++;
    }else{
        answerSix = prompt('Try again');
        console.log('Number of degrees earned? Expect 3');
        console.log(answerSix);
        }
   };  
console.log('Points earned?');
console.log(score);
alert(userName + ' you currently have ' + score + 'points.');

//Asking seventh question.  Multiple possible answers
answer = prompt('What are Terra\'s favorite fruits?');
var questionSeven = ['blackberries', 'blueberries', 'raspberries', 'strawberries']

for(var i = 0; i <= 6; i++ ) {
   if (answer.toLowerCase() === questionSeven[0,1]){
       console.log('Favorite foods? expect blackberries, blueberries, raspberries or strawberries');
       console.log(answer);
       alert('Great job ' + userName + ', you guessed right. Terra loves ' + answer);
       score++;
       i = 7;
}else{
    console.log('Favorite foods? expect blackberries, blueberries, raspberries or strawberries');
    console.log(answer);
    prompt('Try again');
};
};
console.log('Points earned?');
console.log(score);
alert(userName + ' you earned ' + score + 'points.');