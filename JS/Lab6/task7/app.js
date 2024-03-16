function lockedProfile() {
    const buttons = document.querySelectorAll('.profile button');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const buttonClicked = event.target;
            const profileDiv = buttonClicked.closest('.profile');
            const hiddenFieldsId = profileDiv.querySelector('div[id^="user"]').getAttribute('id');
            //div[id^="user"] - селектор, выбирающий все div у которых id начинается с user
            const currentDisplayStyle = document.getElementById(hiddenFieldsId).style.display;

            if (profileDiv.querySelector('input[name^="user"]:checked').value !== 'lock') {
                if (currentDisplayStyle === 'block') {
                    buttonClicked.textContent = "Show more"
                    document.getElementById(hiddenFieldsId).style.display = 'none';
                } else {
                    buttonClicked.textContent = "Hide it"
                    document.getElementById(hiddenFieldsId).style.display = 'block';
                }
            }
        });
    });
}