function mergeProducts(productsList, deliveryList) {
    let list = productsList.concat(deliveryList)
    let objectList = []
    for (let i = 0; i < list.length - 1; i += 2) {
        const positionInShopIndex = objectList.findIndex(item => item && item.product === list[i])
        if (positionInShopIndex !== -1) {
            objectList[positionInShopIndex].quantity += parseInt(list[i + 1], 10)
            objectList[positionInShopIndex].info = `${objectList[positionInShopIndex].product} -> ${objectList[positionInShopIndex].quantity}`
        } else {
            const position = {
                product: list[i],
                quantity: parseInt(list[i + 1], 10),
                info: `${list[i]} -> ${list[i + 1]}`
            }
            objectList.push(position)
        }
    }
    for (const objectListElement of objectList) {
        console.log(objectListElement.info)
    }
}

mergeProducts([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
