console.log("apple")

document.querySelector('#push').onclick = function () {
    // if condition alerts if there is nothing written on your input:
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Enter a Task")
    }
    else {
        const inputValue = document.querySelector('#newtask input').value;
        // if sopmthing written makes a new task and adds it to the div of id tasks.
        document.querySelector('#tasks').innerHTML += `
        <div class= "task">
        <span id="taskname">
        ${inputValue}
        </span>
        <button class="delete">Remove</button>
      </div>
        `;

    }
    let delete_task = document.querySelectorAll(".delete");
    for (let i = 0; i < delete_task.length; i++) {
        const deleteEl = delete_task[i];
        deleteEl.addEventListener('click', function(){
            addDeletion(deleteEl);
        })

    }
}

function addDeletion(element) {
    element.parentNode.remove();
}
