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
chrome.action.onClicked.addListener(function() {
    chrome.tabs.create({url: 'index.html'});
    console.log("asdasd")
  });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "sem_search_clicked") {
      chrome.identity.getAuthToken({interactive: true}, function(token) {
        let init = {
          method: 'GET',
          async: true,
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          },
          'contentType': 'json'
        };
        fetch(
            'https://www.googleapis.com/auth/drive.filen',
            init)
            .then((response) => console.log(response.json())) 
        })}})
     
    //     if (chrome.runtime.lastError) {
    //       console.error(chrome.runtime.lastError.message);
    //     //   sendResponse({error: "Authentication failed"});
    //     } else {
    //       console.log("Authentication successful! Token:", token);
    //     //   sendResponse({token: token});
    //     }
    //   });
    