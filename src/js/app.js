const texts = ['Developer', 'Creator', 'Designer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    //Compares Count to Text length, when it gets to 3 it resets.
    if(count === texts.length){
        count=0;
    }
    currentText = texts[count];
    letter=currentText.slice(0, ++index);
    //Se;ect the class and change its content to letter
    document.querySelector('.txt-type').textContent = letter;
    //As soon as the letter length is the same as our currentTxt, we go to the next one
    if(letter.length === currentText.length){
        count++;
        //Reset starting from the beginning of the word
        index = 0;
    }

    setTimeout(type, 400);
})();