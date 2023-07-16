export class Btn{
/**
 * @param {string} labelName Class of button
 * @param {string} iconName name for icon 
 * @param {Function} func function executed when button is clicked
 * @param {string} id it is not necessary it was made for done button
 * @return {HTMLButtonElement}
 */
static Button( 
  labelName: string, 
  iconName: string, 
  func: Function,
  id="noId"
): HTMLButtonElement {
  let button= document.createElement("button");
  let label= document.createElement("i");
  label.classList.add("material-icons");
  label.id= id;
  label.innerText= iconName;
  button.appendChild(label);
  button.classList.add(labelName);
  button.addEventListener("click", func);
  return button;
}}