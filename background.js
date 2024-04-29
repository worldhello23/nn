chrome.tabs.onUpdated.addListener((tabId,changeinfo,tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);
       
        chrome.tabs.sendMessage(tabId, {
            
            videoId :urlParameters.get("v")
         
  
        })  
    }});
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.openNewTab) {
        // Open the desired URL in a new tab
        chrome.tabs.create({ url: message.openNewTab });
    }
});
   