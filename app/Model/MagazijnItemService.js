import { MagazijnItem} from "./MagazijnItem";

export class MagazijnItemService{

    saveItem(item){
        var itemArray = JSON.parse(localStorage.getItem("items") || "[]");
        itemArray.push(item);
        localStorage.setItem('items', JSON.stringify(itemArray));
    }

    getItems(category){
        let x = JSON.parse(localStorage.getItem('items'));
        let items = [];
        for(let i = 0; i < x.length; i++){
            if(x[i].category === category){
                items.push(x[i]);
            }
        }
        return items;
    }
}