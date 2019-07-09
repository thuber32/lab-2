"use strict";
console.log('What do you know about Terra?');
var score = 0; //number of points earned
var correct = 0; //number of correct answers given
var userName; //userName given by player
var cleanAnswer = "";
var attempts = 0;
// possibleAnswers=[yes, y, no, n]

var userName = prompt('What is your name?');
console.log('What is the users name?');
console.log(userName);
/*Prompt for the first question, checks response and gives alert based on response.  
If player got answer correct, they get a point*/

var answer = prompt(userName + ', do you think that Terra has been a teacher in only one school?');
cleanAnswer = answer.toLowerCase(); // making user's answer lower case 
var possibleAnswers = ['y', 'yes', 'n', 'no']
//check to see if userName answer matches answers in array
if (cleanAnswer === possibleAnswers[2, 3]) {
    alert('Woohoo! You are correct. Terra has taught at three school in the past 18 years!');
    score++; //earned one point
    correct++; //answered the question correctly 
} else {
    alert('Sorry, ' + userName + ' that is not correct. Terra has taught at three schools in the past 18 years!');
};
//check to see that they answer doesn't include extra spaces
//console.log()-- check to see that answer is correct
console.log('Taught in one building? Expect no');
console.log(cleanAnswer);
console.log('Points earned?');
console.log(score);
console.log('Questions correct?')
console.log(correct);
alert('So far, you have ' + score + ' points.');

//user being asked the second question
answer = prompt(userName + ', do you think Terra was a collegiate athlete?');
cleanAnswer = answer.toLowerCase(); // making user's answer lower case 
//checking to see if the second answer matches the answers in the array
if (cleanAnswer === possibleAnswers[0, 1]) {
    alert('Correct. Terra was on the swim team at UNI as well as she played rugby. Go Panthers!');
    score++; //earned one point
    correct++; //answered the question correctly 
} else {
    alert('Wa wa. Sorry,' + userName + ' but Terra actually swam for UNI as well as rugby for UNI.');
};
console.log('Terra a collegiate athlete?  Expect yes');
console.log(cleanAnswer);
console.log('Points earned?');
console.log(score);
console.log('Questions correct?')
console.log(correct);
alert(userName + ' you have ' + score + ' points.');

//checking to see if the third answer matches the answers in the array
answer = prompt('Is Terra a mom?');
cleanAnswer = answer.toLowerCase(); // making user's answer lower case 
//answer is yes
//checking to see if userName answers match correct choice
if (cleanAnswer === possibleAnswers[0, 1]) {
    alert('You rock,' + userName + '. Terra is a mom of two boys.');
    score++; //earned one point
    correct++; //answered the question correctly 
} else {
    alert('Sorry,' + userName + ' no point for you. Terra has two boys');
};
console.log('Is Terra a mom? Expect yes');
console.log(cleanAnswer);
console.log('Points earned?');
console.log(score);
console.log('Questions correct?')
console.log(correct);
alert(userName + ', you have ' + score + ' points.');

//checking to see if the fourth answer matches the answers in the array
answer = prompt('Does Terra bring a Mac to class?');
cleanAnswer = answer.toLowerCase(); // making user's answer lower case 
//answer is no
//checking to see if user answer match correct choice
if (cleanAnswer === possibleAnswers[2, 3]) {
    alert(userName + ', you are on FIRE! Terra uses a pc.');
    score++; //earned one point
    correct++; //answered the question correctly 
} else {
    alert('Silly,' + userName + ' Terra doesn\'t bring a Mac.');
};
console.log('brings Mac to class? Expect no');
console.log(cleanAnswer);
console.log('Points earned?');
console.log(score);
console.log('Questions correct?')
console.log(correct);
alert('You have ' + score + ' points. Question 5 coming up!');

//asking fifth question
answer = prompt('Does Terra drink coffee?');
cleanAnswer = answer.toLowerCase(); // making user's answer lower case 
//checking to see if the fifth answer matches the answers in the array
//answer is yes
if (cleanAnswer === possibleAnswers[0, 1]) {
    alert(userName + ', you guessed right! Terra LOVES coffee!');
    score++;
} else {
    alert('What, who doesn\'t love coffee?');
};
console.log('Terra drinks coffee? Expect yes');
console.log(cleanAnswer);
console.log('Points earned?');
console.log(score);
console.log('Question correct?');
console.log(correct);
alert(userName + ' you currently have ' + score + ' points.');

//Asking sixth question.  Answer is an integer and must give four tries
answer = prompt('How many degrees from college has Terra earned?');
cleanAnswer = parseInt(answer);

//turn script from string output to integer
while (attempts < 4) {
    if (cleanAnswer === 3) {
        alert(userName + ', you guessed right.  Terra has three degrees. Read more about it on her About Me page.');
        score++;
        correct++;
        attempts = 5
    } else if (cleanAnswer < 3) {
        prompt(userName + ', you are too low.  Try again.')
        attempts++
    } else {
        prompt(userName + ', you are too high.  Try again.')
        attempts++
    };
    console.log('Terra has how many degrees? Expect 3');
    console.log(cleanAnswer);
    console.log('Points earned thus far?');
    console.log(score);
    console.log('Total questions correct?')
    console.log(correct);
    alert(userName + ' you currently have ' + score + ' points.');



    //Asking seventh question.  Multiple possible answers
    answer = prompt('What are Terra\'s favorite fruits?');
    var possibleFruits = ['blackberries', 'blueberries', 'raspberries', 'strawberries'];
    cleanAnswer = answer.toLowerCase();
    var cleanerAnswer = possibleFruits.includes(cleanAnswer);
    console.log(cleanAnswer);
    console.log(cleanerAnswer);
    for (var i = 0; i <= 6; i++) {
        if (cleanerAnswer === true) {
            alert('Way to go. Terra likes blackberries, blueberries, raspberries and strawberries.');
            break;
        } else {
            answer = prompt('Try again');
            cleanAnswer = answer.toLowerCase();
            cleanerAnswer = possibleFruits.includes(cleanAnswer);
            console.log(cleanAnswer);
            console.log(cleanerAnswer);
        }
    }
    console.log('Terra favorite fruit? Expect blackberries, blueberries, raspberries, strawberries');
    console.log(cleanAnswer);
    console.log('Points earned thus far?');
    console.log(score);
    console.log('Total questions correct?')
    console.log(correct);
    alert(userName + ', you finished the game with ' + score + ' points. You got ' + correct + ' questions correct.');
}

gameStart();