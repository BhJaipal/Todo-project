/**
 * @param {string} labelName Class of button
 * @param {string} iconName name for icon 
 * @param {Function} func function executed when button is clicked
 * @return {HTMLButtonElement}
 */
function Button( 
  labelName: string, 
  iconName: string, 
  func: Function
): HTMLButtonElement {
  let button= document.createElement("button");
  let label= document.createElement("i");
  label.classList.add("material-icons");
  label.innerText= iconName;
  button.appendChild(label);
  button.classList.add(labelName);
  button.addEventListener("click", func);
  return button;
}}
export { Button }
