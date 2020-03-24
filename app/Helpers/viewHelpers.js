document.createButton = function(name, text){
    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.id = name;
    button.innerText = text;
    return button;
}

document.createLabel = function(text){
    let label = document.createElement("label");
    label.innerText = text;
    return label;
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

document.createCells = function (grid){
    for (let i = 0; i < 225; i++) {
        let newCell = document.createElement("div");
        newCell.id = "cell";
        newCell.classList.add("holder", "cell");
        grid.appendChild(newCell);
    }
    return grid;
};





