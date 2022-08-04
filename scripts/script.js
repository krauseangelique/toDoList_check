// write into HTML document
const row = document.querySelector(".inLineRow");
let boxElem = document.querySelector("#add");
let task = document.querySelector('#task');

// click hover the element
boxElem.addEventListener("click", function () {


    //  div.innerHTML =
    let z = document.createElement('div'); // is a node
    z.classList.add('inLine');
    z.innerHTML = `
    <p class="todone">${task.value}</p>
        <div class="buttons">
            
            <button class="done">Done</button>
            <button class="delete">Delete</button>
        </div>
    `;
    row.appendChild(z); // add the content of the inLineRow div
    task.value = ""; // to clear the input task 

    let buttons = document.querySelectorAll(".inLine .buttons button");
    console.log(buttons);

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            if (btn.classList.contains('done')) {
                btn.classList.toggle('undo'); // done <=> undo
                console.log(btn);
                // new value of Done button
                btn.innerHTML === "Done" ? btn.innerHTML = "Undo" : btn.innerHTML = "Done";
            }


            if (btn.classList.contains('delete')) {
                btn.parentElement.parentElement.remove() // the granddad from the element and remove it

            }

        });
    });

});

