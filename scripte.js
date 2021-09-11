function handleRequiredFields(event) {
    console.log(event.currentTarget.nextElementSibling)
    const errorSpan = event.currentTarget.nextElementSibling
    if (event.currentTarget.value.length === 0) {
        errorSpan.style.display = 'flex'
        return;
    }
    errorSpan.style.display = 'none'
}

function handelAge(event) {
    const age = event.currentTarget.value;
    const errorSpan = event.currentTarget.nextElementSibling

    if (age >= 10 && age <= 100) {
        errorSpan.style.display = 'none'
        return;
    }
    else if (age > 100 || age < 18) {
        errorBody = errorSpan.childNodes[3];
        errorSpan.style.display = 'flex'
        errorBody.innerHTML =`Age must be between 18 and 100 - Your Input ${age} -`
        console.log(errorSpan.childNodes[3])
        return;
    }




}
function handelTextArea(event) {
    const textArea = document.getElementById(event.currentTarget.id);
    const currentheight = textArea.style.height;
    console.log((event.currentTarget.scrollHeight) + 'px');
    textArea.setAttribute("style", `height:${event.currentTarget.scrollHeight}px;overflow-y:hidden;`);

}