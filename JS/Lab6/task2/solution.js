function solve() {
    var result = ""
    const text = String(document.getElementById('text').value)
    const wordsArray = text.toLowerCase().split(" ");
    const convention = String(document.getElementById('naming-convention').value)
    switch (convention) {
        case "Pascal Case":
            result = wordsArray.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("")
            break
        case "Camel Case":
            result = wordsArray.map((word,index) => {
                return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
            }).join("")
            break
        default:
            result = "Error!"
    }
    document.getElementById('result').innerText = result
}