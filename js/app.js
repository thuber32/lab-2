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

var firstAnswer = prompt(userName + ', do you think that Terra has been a teacher in only one school?');
firstAnswer.toLowerCase();
console.log(firstAnswer.toLowerCase());
if (firstAnswer === 'n'|| 'no') {
   alert('Woohoo! You are correct. Terra has taught at three school in the past 18 years!')
   score++;
} else {
    alert('Sorry, ' + userName + 'that is not correct. Terra has taught at three schools in the past 18 years!')
};
console.log(score);
alert('So far, you have '+ score + ' points.')

var secondAnswer = prompt(userName + ', do you think Terra was a collegiate athlete?');
secondAnswer.toLowerCase();
console.log(secondAnswer.toLowerCase());
if (secondAnswer === 'y' || 'yes') {
    alert('Correct. Terra was on the ' + secondAnswer + ' team at UNI. Go Panthers!')
    score++;
} else {
    alert('Wa wa. Sorry, but Terra actually swam for UNI as well as rugby for UNI.')
};
console.log(score);
alert(userName + ' you have '+ score + ' points.')

var thirdAnswer = prompt('Is Terra a mom?');
thirdAnswer.toLowerCase();
console.log(thirdAnswer.toLowerCase());
if (thirdAnswer ==='y' || 'yes') {
    alert('You rock,' + userName + '. Terra is a mom of two boys.')
    score++;
} else {
    alert('Sorry,' + userName + ' no point for you.')
};
console.log(score);
alert( userName + ', you have '+ score + ' points.')

var fourthAnswer = prompt('Does Terra bring a Mac to class?');
fourthAnswer.toLowerCase();
console.log(fourthAnswer.toLowerCase());
if (fourthAnswer === 'n' || 'no') {
    alert( userName + ', you are on FIRE! Terra uses a pc.')
    score++;
} else {
    alert('Silly,' + username + 'Terra doesn\'t bring a Mac.')
};
console.log(score);
alert('You have '+ score + ' points. Last question!')

var fifthAnswer = prompt('Does Terra drink coffee?');
fifthAnswer.toLowerCase();
console.log(fifthAnswer.toLowerCase());

if (fifthAnswer === 'y' || 'yes') {
    alert(username + ', you guessed right! Terra LOVES coffee!')
    score++;
} else {
    alert('What, who doesn\'t love coffee?')
};
console.log(score);
alert(userName + 'you earned'+ score + ' points.')
