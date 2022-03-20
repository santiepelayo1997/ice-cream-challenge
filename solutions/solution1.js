
listItems = iceCreamFlavors.reduce((result, item) => {
    result += `<li class="ice-cream-flavor">${item}</li>`;
    return result;
}, ''); 

document.querySelector(".ice-cream-list").innerHTML = listItems;
