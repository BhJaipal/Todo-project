import { Button } from "./button";
// creates new task
/**
* @param {string} taskName enter name of task
* @return {void} create task and appends it to task-list id 
*/
function newTask(taskName: string): void {
  let listElem= document.createElement("div");
  let name= document.createElement("span");
  name.id="name";
  name.innerText= taskName;
  listElem.classList.add("task-elem");
  listElem.appendChild(name);
  /* Creates edit button */
  let editButton= Button("edit", "edit", function() {
    /* if input name is null, name is unchanged else changed */
    name.innerText= window.prompt("Enter new name: ") ?? taskName;
  });
  /* Creates delete button */
  let delButton= Button("delete", "delete", function() {
    /* deletes task */
    document.querySelector("#task-list").removeChild(listElem);
  });
  /* Creates done button */
  let doneButton= Button("done", "radio_button_unchecked", function() {
    let doneIcon= listElem.children[1].firstChild;
    if (doneIcon.innerText== "radio_button_unchecked") {
      /* changes to done and becomes lightgreen */

      doneIcon.innerText= "check_circle";
      doneIcon.style.color= "lightgreen";
    } else {
      /* changes to undone and becomes black */
      doneIcon.innerText=  "radio_button_unchecked";
      doneIcon.style.color= "black";
    }
  });
  listElem.appendChild(doneButton);
  listElem.appendChild(editButton);
  listElem.appendChild(delButton);
  document.querySelector("ul").appendChild(listElem);
}
export { newTask }
