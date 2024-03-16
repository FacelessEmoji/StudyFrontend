function addItem() {
    const value = document.getElementById("newItemValue").value;
    const text = document.getElementById("newItemText").value;

    const newOption = document.createElement('option');
    newOption.value = value;
    newOption.textContent = text;
    const selectMenu = document.getElementById("menu");
    selectMenu.appendChild(newOption);
}
