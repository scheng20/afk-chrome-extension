document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('test');
    // onClick's logic below:
    link.addEventListener('click', function() {
        helloWorld();
    });
});

function helloWorld() {
	alert("helo!");
}

// Things to tackle:
// - Somehow webspeech API stops working when we interact with the popup
// - We need to figure out a way to turn on and off the speech recognition API via the popup
// - Make the popup look pretty