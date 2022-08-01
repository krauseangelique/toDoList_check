// write into HTML document
const taslList = document.getElementById("taskList");
taslList.innerHTML = "<p class='added'>message</p><div class='input'><input type='button' value='Done' id='done'><input type='button' value='Delete' id='delete'></div>";

let boxElem = document.querySelector(".box");
boxElem.addEventListener("click", logEvent);
