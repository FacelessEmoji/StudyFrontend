function toggle() {
    String(document.querySelector('.button').textContent) === "More" ?
        (document.querySelector('.button').textContent = "Less",
            document.getElementById('extra').style.display = 'block') :
        (document.querySelector('.button').textContent = "More",
            document.getElementById('extra').style.display = 'none');


}