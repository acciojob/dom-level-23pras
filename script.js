function getDomLevel(element) {
    let level = 0;
    while (element.parentNode) {
        level++;
        element = element.parentNode;
    }
    return level;
}

const element = document.querySelector("#level");
let level = getDomLevel(element);
alert(`The level of the element is: ${level}`);



