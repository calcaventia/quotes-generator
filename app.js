const fs = require("fs");

// Read the quotes JSON file using promises
function readFilePromise(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

// Async function to read and process the quotes
async function processQuotes() {
  try {
    const data = await readFilePromise("quotes.json", "utf8");
    const quotes = JSON.parse(data);
    const randomQuote = getRandomQuote(quotes);
    console.log(`"${randomQuote.quote}" - ${randomQuote.author}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to get a random quote from the array
function getRandomQuote(quotesArray) {
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[randomIndex];
}

// Call the async function to process quotes
processQuotes();
