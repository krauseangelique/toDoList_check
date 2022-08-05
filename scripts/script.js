// write into HTML document

// Add Task
const btnAddTask = document.getElementById('add');
const task = document.getElementById('task');

// add the task and the buttons Done and Delete
const row = document.querySelector(".inLineRow");
const inLine = document.querySelector(".inLine");
const todone = document.querySelector(".todone");
const done = document.querySelector(".done");

/*                 
        <div class="inLine">
            <p class="todone">First task</p>
                <div class="input">
                    <input type="button" value="Done" class="done">
                    <input type="button" value="Delete" class="delete">
                </div>         
        </div>
*/

// click hover the element
btnAddTask.addEventListener("click", function () {

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('inLine');
    let newElement = document.createElement('div'); // is a node
    newElement.classList.add('inLine');

    newElement.innerHTML = `
                            <p class="todone">${task.value}</p>
                            <div class="buttons">
                                <button class="done">Done</button>
                                <button class="delete">Delete</button>
                            </div>
                            `;

    if (task.value === "") {
        return null;
    }

    row.appendChild(newElement); // add the content of the inLineRow div

    task.value = ""; // to clear the input task 

    let buttons = document.querySelectorAll(".inLine .buttons button");
    console.log(buttons);

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {

            if (btn.classList[0] === 'done') {
                btn.classList.toggle('undo'); // done <=> undo
                console.log(btn);

                // new value of Done button
                if (btn.innerHTML === "Done") {
                    btn.innerHTML = "Undo";
                } else {
                    btn.innerHTML = "Done";
                }
            };
            if (btn.classList.contains('delete')) {
                btn.parentElement.parentElement.remove() // the granddad from the element and remove it
            }
        });
    });
});



