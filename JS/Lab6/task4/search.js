function search() {
    const townsItems = document.getElementById('towns').getElementsByTagName('li');
    const searchText = String(document.getElementById('searchText').value)
    let matches = 0
    for (let i = 0; i < townsItems.length; i++) {
        const town = townsItems[i];
        if (town.textContent === searchText) {
            matches++
            town.style.fontWeight = "bold";
            town.style.textDecoration = "underline";
        } else {
            town.style.fontWeight = "";
            town.style.textDecoration = "";
        }
    }
    document.getElementById("result").textContent = `${matches} matches found`
}
