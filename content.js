/*
document.addEventListener("click", function() {
    console.log("Hello World")
    window.scrollBy(0, 100);

}, false);
*/

//import { getHeapSpaceStatistics } from "v8";

// adapted from https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

// in progress
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
console.log("hellow world");

var cmds = ['up' , 'down'];
var grammar = '#JSGF V1.0; grammar cmds; public <cmds> = ' + cmds.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
recognition.continuous = true;
var speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);

recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

//var diagnostic = document.querySelector('.output');
//var bg = document.querySelector('html');


// cmds.forEach(function(c, index){
//   console.log(c, index);
//   window.scrollBy(0, 1000);
// });

// Getting text via click:
/*
document.addEventListener("click", function() {

    console.log("SCRAPING HTML:")

    // Rough estimate of where the bottom of the page is
    let botX = document.documentElement.clientWidth - 50;
    let botY = document.documentElement.clientHeight - 50;

    let elem = document.elementFromPoint(botX, botY);

    console.log(elem.tagName);
    console.log(elem.innerHTML);

}, false);
*/

var lastwords;

// Getting text via scroll:
window.onscroll = function(e) {

	console.log("SCRAPING HTML:")

	// Rough estimate of where the bottom of the page is
	let botX = document.documentElement.clientWidth - 100;
	let botY = document.documentElement.clientHeight - 100;

	let elem = document.elementFromPoint(botX, botY);
	let text = elem.innerText;

	//console.log(split(text));
	lastwords = split(text).join(" ").toLowerCase();
	lastwords = lastwords.substring(0, lastwords.length - 1);
	console.log(lastwords);
	console.log(typeof lastwords);
}

// Split the words
function split(text) {
    var n = text.split(" ").splice(-3);
    return n;
}

recognition.start();

recognition.onresult = function(event) {

    var last = event.results.length - 1;
    var cmd = event.results[last][0].transcript.trim();

    console.log('Result received: ' + cmd + '.');

    if (cmd === 'go up') {

        //console.log('upppp');
         window.scrollBy(0, -500);

    } else if (cmd === 'go down') {

        //console.log('downnnn');
         window.scrollBy(0, 500);
         
    } else if (cmd === 'left tab') {
        
    } else if (cmd === 'right tab') {
   
    } else if (cmd === 'open tab' || cmd === 'new tab') {
        window.open('https://www.nwhacks.io/');

    } else if (cmd === 'close tab') {
        window.close();

    } else if (cmd === 'go back') {
        window.history.go(-1);

    } else if (cmd === 'go forward' || cmd === 'go forwards') {
        window.history.go(1);

    } else if (cmd === 'refresh' || cmd === 'reload') {
        window.location.reload(true);

    } else if (cmd === lastwords) {

        //console.log("GOT LAST WORDS");
        window.scrollBy(0, 500);
    }

    console.log('Confidence: ' + event.results[0][0].confidence);
    
}

recognition.onnomatch = function(event) {
    console.log('I didnt recognise that word.');
}

recognition.onerror = function(event) {
    console.log('Error occurred in recognition: ' + event.error);
}

//document.body.onclick = function() {
//document.addEventListener("load", function(event) {
    //recognition.start();
//});

  //console.log('Ready to receive a color command.');
//}