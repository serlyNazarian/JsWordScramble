const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const inputField = document.querySelector("input")
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

let correctWord;

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
    let wordArray = randomObj.word.split(""); // splitting each letter of random word
    for (let i = wordArray.length - 1; i>0; i--) {
        let j = Math.floor(Math.random() * (i + 1 )); // getting random number
        // shuffling and swiping wordArray letters randomly
        [wordArray[i], wordArray[j] ] = [wordArray[j], wordArray[i] ];
    }
    wordText.innerText = wordArray.join(""); // passing shuffled word as word text
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    correctWord = randomObj.word.toLocaleLowerCase(); // passing random word to correctWord
    console.log(wordArray, randomObj.word);
}

initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if (userWord !== correctWord) {
        return alert(`Oops! ${userWord} is not a correct word`);
    }else {
        alert(`Congrats! ${userWord.toUpperCase} is correct`);
    }
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord)