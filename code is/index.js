// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["hard", "fun", "a journey", "LIFE"];
// const typingSpeed = 200;
// const erasingSpeed = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0; // textArray index
// let charIndex = 0; // character index

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingSpeed);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     charIndex--;
//     setTimeout(erase, erasingSpeed);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if(textArrayIndex>=textArray.length) textArrayIndex=0;
//     setTimeout(type, typingSpeed + 1100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//   setTimeout(type, newTextDelay + 250);
// });
var charIndex = -1;
var stringLength = 0;
var inputText;
function writeContent(init){
  if(init){
    inputText = document.getElementById('contentToWrite').innerHTML;
  }
  if(charIndex==-1){
    charIndex = 0;
    stringLength = inputText.length;
  }
  var initString = document.getElementById('myContent').innerHTML;
  initString = initString.replace(/<SPAN.*$/gi,"");

  var theChar = inputText.charAt(charIndex);
  var nextFourChars = inputText.substr(charIndex,4);
  if(nextFourChars=='<BR>' || nextFourChars=='<br>'){
    theChar  = '<BR>';
    charIndex+=3;
  }
  initString = initString + theChar + "<SPAN id='blink'>_</SPAN>";
  document.getElementById('myContent').innerHTML = initString;

  charIndex = charIndex/1 +1;
  if(charIndex%2==1){
    document.getElementById('blink').style.display='none';
  }else{
    document.getElementById('blink').style.display='inline';
  }

  if(charIndex<=stringLength){
    setTimeout('writeContent(false)',140);
  }else{
    blinkSpan();
  }  
}

var currentStyle = 'inline';
function blinkSpan(){
  if(currentStyle=='inline'){
    currentStyle='none';
  }else{
    currentStyle='inline';
  }
  document.getElementById('blink').style.display = currentStyle;
  setTimeout('blinkSpan()',100);
}

