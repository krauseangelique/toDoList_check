// write into HTML document
const taslList = document.querySelector("inline");
let boxElem = document.querySelector("#add");
let task = document.querySelector('#task');


boxElem.addEventListener("click", function () {
    let div = document.createElement('div');
    div.classList.add('inline');

    div.innerHTML = `
    <p class="done">${task.value}</p>
        <div class="input">
            <input type="button" value="Done" id="done" />
            <input type="button" value="Delete" id="delete" />
        </div>
    `
    div.appendChild(body)

});
