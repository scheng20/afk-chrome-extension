
var enabled = false; //disabled by default

document.addEventListener('DOMContentLoaded', function() {

    var toggleButton = document.getElementById('toggle');

    chrome.storage.local.get('enabled', data => {
	    enabled = !!data.enabled;
	    toggleButton.checked = enabled;
	});

    toggleButton.addEventListener('click', function() {
         enabled = !enabled;

         toggleButton.checked = enabled;
         chrome.storage.local.set({enabled:enabled});
    });
});