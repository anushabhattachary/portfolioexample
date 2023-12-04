var aText = new Array('"Where Creativity Meets Code..."');
var iSpeed = 200;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;
var iTextPos = 0;
var sContents = '';
var iRow;

function createTypedTextContainer() {
  var container = document.createElement("div");
  container.id = "typedtext";
  document.body.appendChild(container);

  // Apply styles
container.style.fontFamily = "'Montserrat', sans-serif"; // Replace 'Courier New', Courier, monospace, cursive with 'Montserrat', sans-serif
container.style.fontWeight = "bold"; // Add this line to make the text bold
container.style.fontSize = "300%";
container.style.textAlign = "center";

}

function typewriter() {
  if (!document.getElementById("typedtext")) {
    createTypedTextContainer();
  }

  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex == aText.length) {
      // Reset to the beginning if reached the end
      iIndex = 0;
    }
    iArrLength = aText[iIndex].length;
    setTimeout(typewriter, 1000);
  } else {
    setTimeout(typewriter, iSpeed);
  }
}

typewriter();
