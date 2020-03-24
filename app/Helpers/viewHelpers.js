document.createButton = function(name, text){
    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.id = name;
    button.innerText = text;
    return button;
}

document.createLabel = function(text, newLine) {
    let labelDiv = document.createElement("div");
    let label = document.createElement("label");
    label.innerText = text;
    if (newLine == true) {
        let br = document.createElement("br");
        labelDiv.appendChild(label);
        labelDiv.appendChild(br);
        return labelDiv
    } else {
        labelDiv.appendChild(label);
        return labelDiv;
    }
}


document.createSelect = function(array){
    let multi = document.createElement("select");
    multi.classList.add("form-control");

    for(let i = 0; i < array.length; i++){
        let option = document.createElement("option");
        option.innerText = array[i];
        multi.appendChild(option);
    }

    return multi;
}

document.createInput = function(id, placeholder){
    let input = document.createElement("input");
    input.classList.add("form-control");
    input.id = id;
    input.placeholder = placeholder;
    return input;
};





