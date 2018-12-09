module.exports =function Cart(oldCart){
    this.items =oldCart.items || {};
    this.totalQty =oldCart.totalQty || 0;
    this.totalPrice =oldCart.totalPrice || 0;
    this.add =function(item,id){
        //for group similar type of product like diffrent games have same category of games
        // ..dont store in difffent session but in same row by increase quantity
        var storedItem =this.items[id];//already exist cart item
        if(!storedItem){
            storedItem =this.items[id] = { item:item,qty:0,price:0};
        }
        storedItem.qty++;
        storedItem.price =storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
        };
        this.reduceByOne=function(id){
            this.items[id].qty--;
            this.items[id].price -= this.items[id].item.price;
            this.totalQty--;
            this.totalPrice -= this.items[id].item.price;
            if(this.items[id].qty<=0){
                delete this.items[id];
            }
        };
        this.removeItem =function(id){
            this.totalPrice-=this.items[id].price;
            this.totalQty-=this.items[id].qty;
            delete this.items[id];
        };
        this.generateArray =function(){//get data from object to array
            var arr =[];
            for(var id in this.items){
                arr.push(this.items[id]);
            }
            return arr;
    };
};