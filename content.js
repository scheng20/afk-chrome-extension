
// Web-speech API adapted from https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

// Web-speech API setup
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var cmds = ['up' , 'down'];
var grammar = '#JSGF V1.0; grammar cmds; public <cmds> = ' + cmds.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.continuous = true;
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

speechRecognitionList.addFromString(grammar, 1);

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

    console.log('Input recieved: ' + cmd);
    console.log('Confidence: ' + (event.results[0][0].confidence) * 100 + "%");

    switch (cmd) {
        case "go up":
             window.scrollBy(0, -500);
            break;
        case "scroll up":
             window.scrollBy(0, -500);
            break;
        case "go down":
            window.scrollBy(0, 500);
            break;
          case "scroll down":
            window.scrollBy(0, 500);
            break;

        case "open tab":
            window.open('https://devpost.com/software/afk-bec9g1');
            break;
        case "new tab":
            window.open('https://devpost.com/software/afk-bec9g1');
            break;

        case "close tab":
            window.close();
            break;

        case "go back":
            window.history.go(-1);
            break;

        case "go forward":
            window.history.go(1);
            break;

        case "refresh":
             window.location.reload(true);
             break;
        case "reload":
            window.location.reload(true);
             break;

        case lastwords:
             window.scrollBy(0, 500);
             break;

        default:
            console.log("Unrecognized command");
    }
}

recognition.onnomatch = function(event) {
    console.log("Unrecognized word");
}

recognition.onerror = function(event) {
    console.log("Error occurred in recognition: " + event.error);
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('control');
    // onClick's logic below:
    link.addEventListener('click', function() {
        console.log("begin");
    });
});
