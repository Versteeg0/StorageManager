export class PopupView{

    constructor() {
        this.handleDetails();
    }

    handleDetails() {
        //Popup group
        let popup = document.createElement("div");
        popup.id = "popup";
        popup.classList.add("popup");

        //Header group
        let popupHeader = document.createElement("div")
        popupHeader.id = "popup-header";

        let headerTitle = document.createElement("div");
        headerTitle.id = "title";
        headerTitle.classList.add("title");
        headerTitle.innerText = "Title";

        let backbutton = document.createElement("button");
        backbutton.id = "backbutton";
        backbutton.dataset = data-close-button;
        backbutton.classList.add("close-button");
        backbutton.innerText = "&times;";

        popupHeader.appendChild(headerTitle);
        popupHeader.appendChild(backbutton);

        //Body group
        let popupBody= document.createElement("div")
        popupHeader.id = "popup-body";
        popupHeader.innerText = "Body";

        let overlay = document.createElement("div");
        overlay.id = "overlay";

        let deletebutton = document.createElement("button");
        deletebutton.id = "deletebutton";
        deletebutton.innerText = "Delete";

        popup.appendChild(popupHeader);
        popup.appendChild(popupBody);
        popup.appendChild(overlay);
        popup.appendChild()
    }
}