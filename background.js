chrome.tabs.onActivated.addListener(function(info) {
    chrome.storage.local.set({enabled:false});
});