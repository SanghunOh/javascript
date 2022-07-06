let remove = function (first=""){
    let ulTag = document.querySelector('ul');
    ulTag.lastChild.remove();
    return true;
}

function add(first=""){
    console.log(`fAlert : ${first}`);
    let ulTag = document.querySelector('ul');
    let liTag = document.createElement('li');
    let liText = document.createTextNode('Sony');
    liTag.appendChild(liText);
    ulTag.appendChild(liTag);
    return true;
}

let addEvent = document.querySelector("#add");
addEvent.addEventListener('click', add);

let removeEvent = document.querySelector("#remove");
removeEvent.addEventListener('click', remove);

