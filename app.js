let start = Date.now();
let count = -1;

function click(letter) {
  let now = Date.now();
  count++;
  let text = "";
  console.log(now - start);
  let textbox = document.getElementsByClassName("display-text");
  if (now - start < 6) {
    text += letter.charAt(count);
  } else {
    count = -1;
    text += letter.charAt(0);
  }
  start = now;
  let message=document.createTextNode(text)
  textbox.appendChild(text)
  // return text
}

console.log(click("hello"));
console.log(click("hello"));
console.log(click("hello"));
