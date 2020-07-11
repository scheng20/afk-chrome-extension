
var enabled = false; //disabled by default

document.addEventListener('DOMContentLoaded', function() {

    var toggleButton = document.getElementById('toggle');

    chrome.storage.local.get('enabled', data => {
	    enabled = !!data.enabled;
	    //toggleButton.textContent = enabled ? 'Disable' : 'Enable';
	});

    toggleButton.addEventListener('change', function() {
         enabled = !enabled;
         //toggleButton.textContent = enabled ? 'Disable' : 'Enable';
         chrome.storage.local.set({enabled:enabled});
    });
});

/*
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('toggle');
    // onClick's logic below:
    link.addEventListener('click', function() {
        helloWorld();
    });
});

function helloWorld() {
	alert("helo!");
}*/