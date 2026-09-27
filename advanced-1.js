const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click" , (event) =>{
    event.preventDefault();

    const item = input.value;
    input.value = "";

    const list_item = document.createElement("li");
    const delete_button = document.createElement("button")

    list_item.textContent = item;
    list_item.appendChild(delete_button);
    delete_button.textContent = "Delete";
    list.appendChild(list_item);

    delete_button.addEventListener("click" , ()=>{
        list.removeChild(list_item);

    })
    input.focus();
})