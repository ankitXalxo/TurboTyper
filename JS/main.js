const setOfWords = [
  "The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.",
  "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.",
  "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It’s when you know you’re licked before you begin, but you begin anyway and see it through no matter what.",
];
const msg = document.getElementById("msg");
const TypedWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

const wordCounter = (str) => {
  let response = str.split(" ").length;

  return response;
};
const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let count = 0;

  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      count++;
    }
  });
  let ermsg = " ",
    accu = " ";
  let errorWords = words1.length - count;
  if (errorWords > 10) {
    ermsg = "Remember ACCURACY is more important than SPEED.!";
  }
  if (errorWords == 0) {
    accu = "Well Done! You have 100% ACCURACY.";
  }
  return (
    count +
    " Words Correct Out Of " +
    words1.length +
    " Words" +
    "\n Errors:   " +
    errorWords +
    " Words\n " +
    ermsg +
    accu
  );
};
const playGame = () => {
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNumber];

  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Submit";
};
const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();

  let totalTime = (endTime - startTime) / 1000;

  let totalStr = TypedWords.value;

  let wordCount = wordCounter(totalStr);
  let speed = Math.floor((wordCount / totalTime) * 60);
  let spd = " ";
  if (speed <= 25) {
    spd = "Sorry! but you're a SLOW TYPER, Keep working on your Typing Speed.";
  } else if (speed > 25 && speed <= 45) {
    spd = "Keep it up! you're an average Typer.";
  } else if (speed > 45 && speed <= 60) {
    spd = "Congratulation! you're a fluent Typer";
  } else if (speed > 60 && speed <= 80) {
    spd = "Wow! You're really fast Typer.Keep Going.";
  } else if (speed > 80) {
    spd = "Congratulation! you're a PRO at Typing.";
  }
  let finalMsg = " ";

  if (wordCount <= 2) {
    finalMsg = " Please complete the text and then submit.\n";
  } else {
    finalMsg = "TYPING SPEED :   " + speed + " Words Per Minute\n" + spd + "\n";
  }
  finalMsg += compareWords(msg.innerText, totalStr);
  msg.innerText = finalMsg;
};
TypedWords.disabled = true;
btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    TypedWords.disabled = false;
    playGame();
  } else if (this.innerText == "Submit") {
    TypedWords.disabled = true;
    btn.innerText = "Start";
    endPlay();
    TypedWords.value = " ";
  }
});
