document.addEventListener("DOMContentLoaded", () => {

  const closespan = document.getElementsByClassName("close-rules")[0];
  let guessedWords = [[]];
  let startingId = 1;
  let guessedWordCount = 0;
  let isGuessed = false;
  let word =
    words[Math.floor(Math.random() * words.length)].toLocaleLowerCase();

  console.log(word);

  createSquares();

  const keys = document.querySelectorAll(".keyboard-row button");

  //function is returning current array that we are updating
  function getCurrentWordArray() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1];
  }

  //function is adding letters to our array (array of letters in an array)
  function updateWords(letter) {
    const currentWordArray = getCurrentWordArray();
    //if exists and if is less than 5
    if (currentWordArray && currentWordArray.length < word.length) {
      currentWordArray.push(letter);

      const availableElement = document.getElementById(startingId);
      startingId = startingId + 1;
      availableElement.textContent = letter;
    }
  }

  function getTileColor(letter, index) {
    const isCorrect = word.includes(letter);

    if(!isCorrect) {
      return "#3a3a3c";
    }

    const letterInPossition = word.charAt(index);
    const isCorrectPosition = (letter === letterInPossition);

    if(isCorrectPosition) {
      return "#538d4e";
    }

    return "#b59f3b";
  }

  function handleSubmitWord() {
    const currentWordArray = getCurrentWordArray();
    const firstLetterId = guessedWordCount * word.length + 1;

    if (currentWordArray.length != word.length) {
      showTooShortPopup();
      return;
    }

    //it just cut all array to one string
    const currentWord = currentWordArray.join("");

    if(!words.includes(currentWord)) {
      currentWordArray.forEach((letter, index) => {
          const letterId = firstLetterId + index;
          const letterElement = document.getElementById(letterId);
          letterElement.classList.remove("animate__shakeX");
          void letterElement.offsetWidth;
          letterElement.classList.add("animate__shakeX");
      })

      showNotFoundPopup();
      return;
    }

    const interval = 200;
    currentWordArray.forEach((letter, index) => {
      setTimeout(() => {
        const color = getTileColor(letter,index);

        const letterId = firstLetterId + index;
        const letterElement = document.getElementById(letterId);
        letterElement.classList.add("animate__flipInX");
        letterElement.style =`background-color:${color}; border-color:${color};`;
      }, interval * index);
    })

    guessedWordCount += 1;

    if (currentWord === word) {
      isGuessed = true;
      showGGPopup();
    }

    if (guessedWords.length === 6) {
      showLostPopup();
      stop();
    }
    // we are adding new array to start new row
    if (currentWordArray.length === word.length) {
      guessedWords.push([]);
    }
  }

  function handleDeleteWord() {
    const currentWordArray = getCurrentWordArray();
    if (currentWordArray.length === 0) {
      return;
    }
    currentWordArray.pop();
    guessedWords[guessedWords.length - 1] = currentWordArray;

    const lastElement = document.getElementById(startingId - 1);
    lastElement.textContent = "";
    startingId -= 1;
  }

  function createSquares() {
    const gameBoard = document.getElementById("board");
    gameBoard.style.gridTemplateColumns = `repeat(${word.length}, 1fr)`;
    let oldId = 1;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < word.length; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.classList.add("animate__animated");
        square.setAttribute("id", oldId);
        gameBoard.appendChild(square);
        oldId += 1;
      }
    }
  }

  function showGGPopup() {
    document.getElementById("popup-text").innerHTML = "Congratulations! You found the champion!";
    document.getElementById("popup").style.visibility = "visible";
  }

  function showLostPopup() {
    document.getElementById("popup-text").innerHTML = `Sorry, you have no more guesses! The word is: ${word}`;
    document.getElementById("popup").style.visibility = "visible";
  }

  function showNotFoundPopup() {
    document.getElementById("popup-text").innerHTML = "Champion not found!";
    document.getElementById("popup").style.visibility = "visible";
  }

  function showTooShortPopup() {
    document.getElementById("popup-text").innerHTML = `Word must be ${word.length} letters!`;
    document.getElementById("popup").style.visibility = "visible";
  }
  
  function closePopup() {
    document.getElementById("popup").style.visibility = "hidden";
  }

  closespan.onclick = function() {
    document.getElementById("modal-rules").style.visibility = "hidden";
  }

  for (let i = 0; i < keys.length; i++) {
    //add event handler, if onclick then target capture assigned letters in html
    keys[i].onclick = ({ target }) => {
      const key = target.getAttribute("data-key");
      if(isGuessed) {
        return;
      }
      if (key === "enter") {
        handleSubmitWord();
        return;
      }
      if (key === "del") {
        handleDeleteWord();
        return;
      }
      updateWords(key);
    };
  }

  document.addEventListener("keydown", function (event) {
    if (isGuessed) {
      return;
    }
    if(event.key == "q") {  
    updateWords(event.key);
    }
    if(event.key == "w") {
      updateWords(event.key);
    }
    if(event.key == "e") {
      updateWords(event.key);
    }
    if(event.key == "r") {
      updateWords(event.key);
    }
    if(event.key == "t") {
      updateWords(event.key);
    }
    if(event.key == "y") {
      updateWords(event.key);
    }
    if(event.key == "u") {
      updateWords(event.key);
    }
    if(event.key == "i") {
      updateWords(event.key);
    }
    if(event.key == "o") {
      updateWords(event.key);
    }
    if(event.key == "p") {
      updateWords(event.key);
    }
    if(event.key == "a") {
      updateWords(event.key);
    }
    if(event.key == "s") {
      updateWords(event.key);
    }
    if(event.key == "d") {
      updateWords(event.key);
    }
    if(event.key == "f") {
      updateWords(event.key);
    }
    if(event.key == "g") {
      updateWords(event.key);
    }
    if(event.key == "h") {
      updateWords(event.key);
    }
    if(event.key == "j") {
      updateWords(event.key);
    }
    if(event.key == "k") {
      updateWords(event.key);
    }
    if(event.key == "l") {
      updateWords(event.key);
    }
    if(event.key == "z") {
      updateWords(event.key);
    }
    if(event.key == "x") {
      updateWords(event.key);
    }
    if(event.key == "c") {
      updateWords(event.key);
    }
    if(event.key == "v") {
      updateWords(event.key);
    }
    if(event.key == "b") {
      updateWords(event.key);
    }
    if(event.key == "n") {
      updateWords(event.key);
    }
    if(event.key == "m") {
      updateWords(event.key);
    }
    if(event.key == "Backspace") {
      handleDeleteWord();
    }
    if(event.key == "Enter") {
      handleSubmitWord();
    }
    if(event.key == "Escape") {
      closePopup();
      document.getElementById("modal-rules").style.visibility = "hidden";
    }
  });
  document.getElementById("close-button").addEventListener("click", closePopup);
});
