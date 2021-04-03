chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  fetch(message)
    .then((response) => response.text())
    .then((html) => sendResponse(html.includes("Become a member to get unlimited access")));
  return true
});
