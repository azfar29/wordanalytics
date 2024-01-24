const textAreaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const wordsNumberEl = document.querySelector('.stat__number--words');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');

const inputHandler = () => {
    //example of input validation
    if (textAreaEl.value.includes('<script>')) {
        alert("Script tag is not allowed!");
        textAreaEl.value = textAreaEl.value.replace('<script>', '');
    }

    //determine new numbers
    const numberOfCharacters = textAreaEl.value.length;
    const twitterCharactersLeft = 280 - numberOfCharacters;
    const facebookCharactersLeft = 2200 - numberOfCharacters;
    let wordsCount = textAreaEl.value.split(" ").length; 
    if (textAreaEl.value.length === 0) {
        wordsCount = 0;
    }

    //add visual indicator if limit is exceeded
    if (twitterCharactersLeft < 0) {
        twitterNumberEl.classList.add('stat__number--limit');
    } else {
        twitterNumberEl.classList.remove('stat__number--limit');
    }

    if (facebookCharactersLeft < 0 ) {
        facebookNumberEl.classList.add('stat__number--limit');
    } else {
        facebookNumberEl.classList.remove('stat__number--limit');
    }

    // set new numbers
    charactersNumberEl.textContent = numberOfCharacters;
    twitterNumberEl.textContent = twitterCharactersLeft;
    facebookNumberEl.textContent = facebookCharactersLeft;
    wordsNumberEl.textContent = wordsCount;
};

const textLength = textAreaEl.addEventListener('input', inputHandler);