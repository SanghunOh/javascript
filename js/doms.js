let remove = function (first=""){
    let ulTag = document.querySelector('ul');
    ulTag.lastChild.remove();
    return true;
}

function add(evet){
    console.log(`fAlert : ${first}`);
    let ulTag = document.querySelector('ul');
    let liTag = document.createElement('li');
    let liText = document.createTextNode('Sony');
    liTag.appendChild(liText);
    ulTag.appendChild(liTag);
    return true;
}



let addEvent = document.querySelector("#add");
// addEvent.addEventListener('click', add);
// addEvent.addEventListener('click', (first="")=>{
//     console.log(`fAlert : ${first}`);
//     let ulTag = document.querySelector('ul');
//     let liTag = document.createElement('li');
//     let liText = document.createTextNode('Sony');
//     liTag.appendChild(liText);
//     ulTag.appendChild(liTag);
//     return true;
// });
addEvent.addEventListener('click', (event)=>{
    // console.log(event);
    console.log(event.target.innerText);
    
    let ulTag = event.target;
    let liTag = document.createElement('li');
    let liText = document.createTextNode('Sony');
    liTag.appendChild(liText);
    ulTag.appendChild(liTag);

    return true;
});


let removeEvent = document.querySelector("#remove");
removeEvent.addEventListener('click', remove);

