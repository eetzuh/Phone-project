let message = " ";
let count = 0;
let previous = "";
let time = 0;

function clickingOnButton(letters) {
  let currentTime = Date.now();

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
