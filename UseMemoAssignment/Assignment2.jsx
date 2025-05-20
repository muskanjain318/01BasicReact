console.log("Try programiz.pro");

function Generate() {
    let words = ["hi", "hello", "Muskan"];
    let sent_length = 15;

    for (let i = 1; i <= sent_length; i++) {
        let sentence = "";
        for (let j = 1; j <= 5; j++) {
            const randomIndex = Math.floor(Math.random() * words.length);
            sentence = sentence + words[randomIndex] + " ";
        }
        console.log(`${i}: ${sentence.trim()}`);
    }
}

// Call the function to generate the sentences
Generate();
