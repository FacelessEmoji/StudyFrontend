function attachEventsListeners() {
    const convertBtns = document.querySelectorAll('input[type="button"]');
    for (const btn of convertBtns) {
        btn.addEventListener('click', handleConversion);
    }
}

function handleConversion(event) {
    console.log('smth')
    const conversionType = event.target.id.replace('Btn', '');
    console.log(conversionType)
    const input = Number(document.getElementById(conversionType).value);
    console.log(input)
    switch (conversionType) {
        case 'days':
            console.log('days')
            document.getElementById("hours").value = String(input*24)
            document.getElementById("minutes").value = String(input*24*60)
            document.getElementById("seconds").value = String(input*24*60*60)
            break;
        case 'hours':
            document.getElementById("days").value = String(input/24)
            document.getElementById("minutes").value = String(input*60)
            document.getElementById("seconds").value = String(input*60*60)
            break;
        case 'minutes':
            document.getElementById("days").value = String(input/60/24)
            document.getElementById("hours").value = String(input/60)
            document.getElementById("seconds").value = String(input*60)
            break;
        case 'seconds':
            document.getElementById("days").value = String(input/60/60/24)
            document.getElementById("hours").value = String(input/60/60)
            document.getElementById("minutes").value = String(input/60)
            break;
        default:
            break
    }
}
