let message = " ";
let count = 0;
let previous = "";
let time = 0;

function clickingOnButton(letters) {
  let currentTime = Date.now();
  message=document.getElementById("textual").innerHTML
  if (currentTime - time < 500 && previous == letters) {
    count++;
    if (count == letters.length) {
      count = 0;
    }
    message = message.slice(0, -1) + `${letters.charAt(count)}`;
  } else {
    count = 0;
    message += letters.charAt(count);
  }

  document.getElementById("textual").innerHTML = message;
  time = currentTime;
  previous = letters;
}

function eraser(){
  document.getElementById("textual").innerHTML=document.getElementById("textual").innerHTML.slice(0, document.getElementById("textual").innerHTML.length-1)
}

function submit(){
  document.getElementById("submited-msg").innerHTML+=document.getElementById("textual").innerHTML+"<br>"
  document.getElementById("textual").innerHTML=""
}