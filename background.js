'use strict';

// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    console.log('inputChanged: ' + text);
	var url = atob(text);
    suggest([
	  {content: atob(text), description: "Go to " + url}
    ]);
  });

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    console.log('inputEntered: ' + text);
	chrome.tabs.update({
	  url: text
	})
  });
