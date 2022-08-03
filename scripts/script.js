// write into HTML document
const row = document.querySelector(".inLineRow");
let boxElem = document.querySelector("#add");
let task = document.querySelector('#task');

// click hover the element
boxElem.addEventListener("click", function () {
    let div = document.createElement('div');
    div.classList.add('inline');

    //  div.innerHTML =
    let z = document.createElement('div'); // is a node
    z.classList.add('inLine');
    z.innerHTML = `
    <p class="todone">${task.value}</p>
        <div class="input">
            <input type="button" value="Done" class="done" />
            <input type="button" value="Delete" id="delete" />
        </div>
    `;
    row.appendChild(z); // add the content of the inLineRow div

    let elementDone = document.querySelector(".done");
    console.log(elementDone);
    
    elementDone.onclick = function () {

        // new value of Done button
        elementDone.value = "Undo";
        console.log(elementDone);
        //  new backgroundColor
        elementDone.style.color = `white`;
        console.log(elementDone);
    }      
});


