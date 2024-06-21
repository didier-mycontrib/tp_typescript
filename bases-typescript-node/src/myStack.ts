
class MyStack<T> {

    private _items : T[] = [];

    constructor(){
    }

    public push(element:T){
      this._items.push(element);
    }

    public isEmpty() : boolean{
    return this._items.length == 0;
    }

    public pop() : T|undefined{
    if (this.isEmpty())
        throw "underflow / empty stack";
    return this._items.pop(); //remove and return top stack value
    }

    public peek(): T|undefined{
    if (this.isEmpty())
     throw "underflow / empty stack";
    return this._items[this._items.length - 1]; //return top stack value without remove it
    }

}

const stackOfNumber = new MyStack<number>();
stackOfNumber.push(1); stackOfNumber.push(4); 
stackOfNumber.push(9); stackOfNumber.push(25);

const topVal : number | undefined  =  stackOfNumber.pop();
console.log("topVal="+topVal); //25

const stackOfString = new MyStack<string>();
stackOfString.push("aaa"); stackOfString.push("bbb"); 
stackOfString.push("ccc"); stackOfString.push("ddd");

const sTopVal : string | undefined  =  stackOfString.pop();
console.log("sTopVal="+sTopVal); //ddd

