import { newTask } from "./taskAdd";

let addMore= document.getElementById("adding") as HTMLLabelElement;
addMore.style.display= "none";
/* on clicking add button display of input appears and on clicking mouse out of input, input disappears*/
document.querySelector("#add").addEventListener("click", function () {
  addMore.style.display = "block";
  addMore.onmouseout= function () {addMore.style.display= "none";}
});
/* on clicking done after entering input is not empty, task is added, if task name is null or empty string, it returns alert */
document.querySelector("#add-it").addEventListener("click", function() {
  if (document.getElementById("add-more").value== null || document.getElementById("add-more").value== "") {
    window.alert("Enter a task name first");
  } else {
    newTask(document.getElementById("add-more").value);
    document.querySelector("#add-more").value ="";
  }
})
