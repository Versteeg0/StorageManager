import { MagazijnItem} from "./MagazijnItem";

export class MagazijnItemService{

    saveItem(item){
        let itemArray = JSON.parse(localStorage.getItem("items") || "[]");
        itemArray.push(item);
        localStorage.setItem('items', JSON.stringify(itemArray));
    }

    getItems(category){
        let x = JSON.parse(localStorage.getItem('items'));
        let items = [];
        if(x != null){
            for(let i = 0; i < x.length; i++){
                if(x[i].category === category){
                    items.push(x[i]);
                }
            }
        }
        return items;
    }

    getItem(data){
        let x = JSON.parse(localStorage.getItem('items'));
        let item = null;
        if(x != null){
            for(let i = 0; i < x.length; i++){
                if(x[i].name === data){
                    item = x[i];
                }
            }
        }
        return item;
    }

    deleteItem(data){
        let itemArray = JSON.parse(localStorage.getItem("items") || "[]");
        let index = itemArray.indexOf(data);
        itemArray.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(itemArray));
    }
    
}