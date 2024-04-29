const textareaElement = document.createElement("textarea");

function doit () {
    chrome.runtime.onMessage.addListener((obj,sender,response) => {
        
        const { videoId } = obj;          
        currentVideo = videoId;
        
       
        newVideoLoaded();
       
        console.log("new video loaded / refreshed");
            
    });   
 } // listen for youtube page and if its updated
    
doit();

// // add search button and description box
const newVideoLoaded =  () => {
    const searchBtnExists = document.getElementsByClassName("search-btn")[0];
     if (!searchBtnExists) {
         //search btn
        textareaElement.textContent = '';
        const searchBtn = document.createElement("img");
        searchBtn.src = chrome.runtime.getURL("images/search.png");
        searchBtn.className = "search-btn";
        searchBtn.title = "search button";
        searchBtn.style.width = "auto";
        searchBtn.style.height = "auto";
      
        childd = document.querySelector("#secondary-inner");
        youtubebar = childd.parentNode;
        youtubebar.insertBefore(searchBtn, childd);

        // newBTN
        const newBtn = document.createElement("button");
        newBtn.textContent = "debunk this";
        newBtn.className = "new-btn";
        newBtn.style.marginLeft = "5px"; 
        
        // youtubebar.appendChild(newBtn);
        // youtubebar.insertBefore(newBtn, childd);//searchBtn.nextSibling);
        console.log("we are making a button");
        console.log(newBtn);
        console.log('this is new btn');
       
        // summarize 
        const summ = document.createElement("button");
        summ.textContent = "summarize";
        summ.className = "summ";
        summ.style.marginLeft = "5px"; 
        youtubebar.insertBefore(summ, childd);
        summ.addEventListener("click", function() {
            prompt_text = "Summarize the following text: " + text_cleaned;
            // Send a message to the background script to open a new tab
            sendRequestToCloudFunction(prompt_text)
            .then(response => {
              const reader = response.body.getReader();
              const decoder = new TextDecoder();
              // To store the decoded text
        
              async function processStream() {
                while (true) {
                  const { done, value } = await reader.read();
                  if (done) {
                    return; 
                  }
                //   completeText += decoder.decode(value); // Accumulate decoded chunks
                const decodedChunk = decoder.decode(value);
                textareaElement.textContent += decodedChunk;
                }
              }
        
              processStream();
            })
            .catch(error => {
              console.error('Error:', error);
              // Handle errors appropriately (e.g., display an error message)
            }); 
        });

        
        //semantic search button
        const sem_search = document.createElement("button");
        sem_search.textContent = "donate";
        sem_search.className = "sem-search";
        sem_search.marginLeft = "5px"; 
        // youtubebar.insertBefore(sem_search, summ.nextSibling);
       

        
        const divElement = document.createElement("div");
    
    
    // Set textarea attributes
        textareaElement.setAttribute("rows", "15");
        textareaElement.style.width = "calc(100% - 10px)";
        
        textareaElement.setAttribute("readonly", true);
      
    // Add textarea to the div element
        divElement.appendChild(textareaElement);
    
    // Add class to the div element
    //divElement.innerHTML = 'Hello its me'; //'<textarea id="text-summary" rows="5" cols="40"></textarea>';
        divElement.className = "div-element";
        youtubebar.insertBefore(divElement, childd);

        // Create the search bar input element
        const searchBar = document.createElement("input");
        searchBar.type = "text";
        searchBar.placeholder = "Enter your search query";
        // You can adjust the style as needed
        searchBar.style.width = "calc(100% - 10px)";
        youtubebar.insertBefore(searchBar, divElement);
        // Append the search bar to the YouTube bar
        searchBar.addEventListener("keypress", function(event) {
            // Check if the Enter key was pressed (key code 13)
            if (event.key === "Enter") {
                textareaElement.textContent = '';
                // Prevent the default action of the Enter key (form submission)
                event.preventDefault();
        
                // Get the value entered in the search bar
                const query = event.target.value;
        
                // Do something with the query, for example, log it to the console
                console.log("Search query:", query);
                prompt_text  = "Based on this" + text_cleaned + "Answer the following question :" + query;
            
                sendRequestToCloudFunction(prompt_text)
                .then(response => {
                  const reader = response.body.getReader();
                  const decoder = new TextDecoder();
                  // To store the decoded text
            
                  async function processStream() {
                    while (true) {
                      const { done, value } = await reader.read();
                      if (done) {
                        return; 
                      }
                    //   completeText += decoder.decode(value); // Accumulate decoded chunks
                    const decodedChunk = decoder.decode(value);
                    textareaElement.textContent += decodedChunk;
                    }
                  }
            
                  processStream();
                })
                .catch(error => {
                  console.error('Error:', error);
                  // Handle errors appropriately (e.g., display an error message)
                }); 
            }
        });
    text_cleaned  = gettheTranscript();
    const targetNode = document.querySelector('body'); // Or another suitable element
    const config = { attributes: true, childList: true, subtree: true };

    const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'video-id') {
            // const newUrl = location.href; 
            // console.log('URL changed within the page:', newUrl);s
            // newVideoLoaded();
            text_cleaned = gettheTranscript();
            // Your custom actions on URL change
        }
    }
});

observer.observe(targetNode, config);


    };}

// Functions
// Remove new lines
function gettheTranscript(){
    //more button
     textareaElement.textContent = '';
    waitForElementAndAct('tp-yt-paper-button#expand', (elm) => {
        // getTranscript(expandButton);
        elm.click()
        console.log("the element finally found");
    });

    // Show transcript button
    waitForElementAndAct('#primary-button ytd-button-renderer yt-button-shape button', (elm) => {
    elm.click();
   console.log('show transcript done')
    //return the edited transcript
    });
    waitForElementAndAct('#segments-container', (elm) => {
    textt = elm.textContent;
    console.log(textt);
    text_cleaned = removenewlines(textt);
    // console.log(text_cleaned)
    
    // })

    //close transcript
    waitForElementAndAct('[aria-label="Close transcript"]', (elm) => {
        elm.click();
        console.log('close ' + elm);
        
    });return text_cleaned }); }
const removenewlines = (textt) => {
    const pairs = textt.split(/\s+(?=\d+:)/).filter(Boolean); 
    const p = pairs.map(pair => pair.replace(/\n\s+/g, ' ').trim())
    return p;}
   
// Wait for Element to load on page
function waitForElementAndAct(selector, actionCallback) {
    

    const observer = new MutationObserver((mutations) => {
        const targetElement = document.querySelector(selector);
        if (targetElement) {
            actionCallback(targetElement);
            observer.disconnect(); 
            
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
   
}
// Define a function to send a request to your Cloud Function
async function sendRequestToCloudFunction(text_to_cloud) {
    const cloudFunctionUrl = 'https://us-central1-moonlit-haven-414211.cloudfunctions.net/function-chrome-extension/generateText/';
  
    return fetch(cloudFunctionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: text_to_cloud }),
    })
    .then(response => {
        // console.log(response)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Return the response s
        return response;
    })
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
}

