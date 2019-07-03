"use strict";
console.log('What do you know about Terra?');
var score = 0;
//Prompt for the first question, checks response and gives alert

var firstAnswer = prompt('What does Terra do for a living?');
console.log(firstAnswer.toLowerCase());
if (firstAnswer === 'teacher') {
    alert('Correct. Terra is a ' + firstAnswer + ' at Mid-Prairie Middle School.')
} else {
    alert('No, Terra is not a(n)' + firstAnswer + '. She is a teacher.')
};

var secondAnswer = prompt('What sport did Terra participate in college?');
console.log(secondAnswer.toLowerCase());
if (secondAnswer == 'swimming' || 'rugby') {
    alert('Correct. Terra was on the ' + secondAnswer + ' team at UNI. Go Panthers!')
} else {
    alert('Sorry, good guess.  Terra doesn\'t play ' + secondAnswer + '. She swam and played rugby for UNI.')
};

var thirdAnswer = prompt('');
console.log(thirdAnswer.toLowerCase());
if (thirdAnswer === '') {
    alert()
} else {
    alert()
};

var fourthAnswer = prompt('');
console.log(fourthAnswer.toLowerCase());
if (fourthAnswer === '') {
    alert()
} else {
    alert()
};

var fifthAnswer = prompt('');
console.log(fifthAnswer.toLowerCase());
if (fifthAnswer === '') {
    alert()
} else {
    alert()
};