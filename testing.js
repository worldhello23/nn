
prompt_text = "write a small story on dogs."

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

// Example usage
sendRequestToCloudFunction(prompt_text)
  .then(response => {
    // console.log(response);
    const reader = response.body.getReader();

    async function processStream() {
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log('Stream complete');
          return; 
        }
        // console.log('Received chunk of data:', value); 
        const decodedChunk = decoder.decode(value); // Decode the chunk
        console.log(decodedChunk);
        // Do something with the received chunk (value)
      }
    }

    processStream(); 
  })
  .catch(error => {
    console.error('Error:', error);
  }); 


// const model = genAI.getGenerativeModel({ model: "gemini-pro" });
// const prompt = req.body.prompt;
// const result =  model.generateContent(prompt);
// const response =  result.response;
// const text =  response.text();//

// index.namespace('hello').deleteAll();
// const url = "https://api.voyageai.com/v1/embeddings";
// const headers = {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer pa-i8Y3jmb2N7clEPFueI_Jxpj2ZhLQ25FFEQkwIDiefuY" // Replace with your API key
//     };

// const payload = {
//     input: "What does the video say about Italian Mafia?",
//     model: 'voyage-2'
// }

// // Fetch data from the API  
// async function fetchData(url, headers, payload) {
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: headers,
//             body: JSON.stringify(payload)
//         });
        
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// }
// let embedding;
// // Fetch the embedding from the API
// fetchData(url, headers, payload).then(data => {
//      embedding = data.data[0].embedding;
//     //  console.log(embedding);
//      index.namespace('hello').query({
//         topK: 5,
//         vector: embedding,
//         includeMetadata: true
//       }).then(res => {
//         // console.log(res);
//         res.matches.forEach(match => {
//             console.log(match.score);
//             console.log(match.metadata);
//         });
       
//       })

//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

  