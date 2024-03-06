var tooglebottun = false;
var tooglet = true;

function f1() {
  document.getElementById("img").style.display = "none";
}

function f2() {
  document.getElementById("img").style.display = "block";
}

function f3() {
  var img2 = document.getElementById("img2");
  img2.width -= 10;
  img2.height -= 10;
}

function f4() {
  var img2 = document.getElementById("img2");
  img2.width += 10;
  img2.height += 10;
}

function f5() {
  var img3 = document.getElementById("img3");
  var img4 = document.getElementById("img4");
  var img3Src = img4.src;
  var img4Src = img3.src;
  img3.src = img3Src;
  img4.src = img4Src;
}

function f6(td) {
  if (td.children.length === 0) {
    var img5 = document.createElement("img");
    img5.setAttribute("src", "images/5.jpg");
    img5.setAttribute("height", "150");
    img5.setAttribute("width", "150");
    img5.setAttribute("onclick", "f7(this)");
    td.appendChild(img5);
  }
}

function f7(img) {
  var split_array = img.src.split("/");
  var src = split_array[split_array.length - 2] + "/" + split_array[split_array.length - 1];
  alert(`${src}, height: ${img.height}, width: ${img.width}`);
}

function f8(select) {
  document.body.style.backgroundColor = select.value;
}

function ChangeColor(element) {
  var alternateColor = element.getAttribute("alternateColor");
  element.style.border = `1px solid ${alternateColor}`;
  var currentColor;
  if (alternateColor === "blue") {
    currentColor = "red";
  } else if (alternateColor === "red") {
    currentColor = "blue";
  }
  element.setAttribute("alternateColor", currentColor);
}

function f9(count) {
  var tr = document.getElementById("ex8-tr");
  for (var i = 0; i < count; i++) {
    var img = document.createElement("img");
    img.setAttribute("src", `images/${i + 1}.jpg`);
    img.setAttribute("height", "150");
    img.setAttribute("width", "150");
    if (i % 2 === 0) {
      img.setAttribute("style", "border: 1px solid blue");
      img.setAttribute("alternateColor", "red");
    } else {
      img.setAttribute("style", "border: 1px solid red");
      img.setAttribute("alternateColor", "blue");
    }
    img.setAttribute("onmouseover", "ChangeColor(this)");
    var td = document.createElement("td");
    td.appendChild(img);
    tr.appendChild(td);
  }
}

f9(3);

function reverseStr(str) {
  var reversedStr = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

function f10(element) {
  var value = element.value;
  var reversedStr = reverseStr(value);
  var disabledInput = document.getElementById("disabledInput");
  disabledInput.value = reversedStr;
}
