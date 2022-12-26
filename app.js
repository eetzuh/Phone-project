let message = " ";
let count = 0;
let previous = "";
let time = 0;
let upper = false;
let del=false;
let screen=""


function clickingOnButton(letters) {
  let currentTime = Date.now();
  message=document.getElementById("textual").innerHTML
  if (currentTime - time < 900 && previous == letters) {
    count++;
    if (count == letters.length) {
      count = 0;
    }
    if(upper == true){
      message = message.slice(0, -1) + letters.substring(count,count+1).toUpperCase();
    }else{
      message = message.slice(0, -1) + `${letters.charAt(count)}`;
    }
    if(letters == '*'){
      upper = true;
      message=message.slice(0,-1);
    }
  } else {
    count = 0;
    if(previous!=letters && previous != '*'){
      upper = false;
    }
    if(upper == true){
      message +=letters.substring(count,count+1).toUpperCase();
    }else{
      message +=letters.substring(count,count+1)
    }
  }
  document.getElementById("textual").innerHTML = message;
  time = currentTime;
  previous = letters;
  screen="messages"
}

function eraser(){
  document.getElementById("textual").innerHTML=document.getElementById("textual").innerHTML.slice(0, document.getElementById("textual").innerHTML.length-1)
}

function submit(){
  if(document.getElementById("textual").innerHTML!==" "){
  document.getElementById("submited-msg").innerHTML+=document.getElementById("textual").innerHTML+"<br>"
  document.getElementById("textual").innerHTML=""
  }
}

function goToMenu(){
  memory= document.getElementById("textual").innerHTML
  document.getElementById("menu").innerHTML="MENU"
  document.getElementById("sendEmail").innerHTML="&#9679 Send email"
  document.getElementById("textual").innerHTML=textual.parentNode.removeChild(textual)
  screen="menu"
  console.log(memory)
}
function goBack(){
  if(screen=="menu"){
  document.getElementById("menu").innerHTML=""
  document.getElementById("sendEmail").innerHTML=""
  document.getElementById("shownScreen").appendChild(document.createElement('p')).setAttribute("id","textual")
  document.getElementById("textual").innerHTML=memory
  }
}

function call(){
  let regexForPlus=/^[+]\d+$/
  let regexForZero=/^[0]\d+$/
  if(regexForPlus.test(document.getElementById("textual").innerHTML)==true){
    let num=document.getElementById("textual").innerHTML.substring(1,document.getElementById("textual").innerHTML.length)
    return window.open(`viber://chat?number=${num}`)
  }else if(regexForZero.test(document.getElementById("textual").innerHTML)==true){
    let num="382"+document.getElementById("textual").innerHTML.substring(1,document.getElementById("textual").innerHTML.length)
    return open(`viber://chat?number=${num}`)
  }
}

function clock(){
 let refreshTime=setInterval(function(){
    let now= new Date()
    let hours=now.getHours()
    let minutes=now.getMinutes()
    if(hours<10){
     hours=`0${now.getHours()}` 
    }
    if(minutes<10){
      minutes=`0${now.getMinutes()}`
    }
  document.getElementById("time").innerHTML=`${hours}:${minutes}`;
  }, 1000)
}
clock()

