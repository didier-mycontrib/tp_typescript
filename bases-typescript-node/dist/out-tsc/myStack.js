"use strict";
var MyStack = /** @class */ (function () {
    function MyStack() {
        this._items = [];
    }
    MyStack.prototype.push = function (element) {
        this._items.push(element);
    };
    MyStack.prototype.isEmpty = function () {
        return this._items.length == 0;
    };
    MyStack.prototype.pop = function () {
        if (this.isEmpty())
            throw "underflow / empty stack";
        return this._items.pop(); //remove and return top stack value
    };
    MyStack.prototype.peek = function () {
        if (this.isEmpty())
            throw "underflow / empty stack";
        return this._items[this._items.length - 1]; //return top stack value without remove it
    };
    return MyStack;
}());
var stackOfNumber = new MyStack();
stackOfNumber.push(1);
stackOfNumber.push(4);
stackOfNumber.push(9);
stackOfNumber.push(25);
var topVal = stackOfNumber.pop();
console.log("topVal=" + topVal); //25
var stackOfString = new MyStack();
stackOfString.push("aaa");
stackOfString.push("bbb");
stackOfString.push("ccc");
stackOfString.push("ddd");
var sTopVal = stackOfString.pop();
console.log("sTopVal=" + sTopVal); //ddd
//# sourceMappingURL=myStack.js.map