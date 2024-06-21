"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnimalDomestique = /** @class */ (function () {
    function AnimalDomestique(name) {
        if (name === void 0) { name = "defaultAnimalName"; }
        this.name = name;
    }
    AnimalDomestique.prototype.decrire = function () { console.log("AnimalDomestique nom=" + this.name); };
    AnimalDomestique.prototype.parler = function () { console.log("…"); };
    return AnimalDomestique;
}());
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(name) {
        if (name === void 0) { name = "defaultCatName"; }
        var _this = _super.call(this, name) || this;
        _this.nbHeuresSommeil /*:number */ = 14;
        return _this;
    }
    Chat.prototype.decrire = function () {
        console.log("Je suis un chat qui dort " + this.nbHeuresSommeil + " h");
        _super.prototype.decrire.call(this);
    };
    Chat.prototype.parler = function () { console.log("miaou miaou"); };
    Chat.prototype.ronronner = function () { console.log("ronron..."); };
    return Chat;
}(AnimalDomestique));
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien(name) {
        if (name === void 0) { name = "defaultDogName"; }
        return _super.call(this, name) || this;
    }
    Chien.prototype.decrire = function () {
        console.log("Je suis un chien , fonction=" + this.fonction);
        _super.prototype.decrire.call(this);
    };
    Chien.prototype.parler = function () { console.log("whaouf whaouf"); };
    Chien.prototype.monterLaGarde = function () { console.log("je monte la garde ..."); };
    return Chien;
}(AnimalDomestique));
var a = new AnimalDomestique(); //var a = new AnimalDomestique("animal");
a.decrire(); //AnimalDomestique nom=defaultAnimalName
var chat1 = new Chat("malo"); //var chat1 = new Chat();
chat1.ronronner(); //ronron
chat1.decrire(); // Je suis un chat qui dort 14h AnimalDomestique nom=malo
chat1.parler(); // miaou miaou
var a2 = new Chien("Rantanplan");
if (a2 instanceof Chien)
    a2.monterLaGarde();
a2.decrire(); //Je suis un chien fonction=undefined AnimalDomestique nom=Rantanplan
a2.parler(); // whaouf whaouf  //polymorphisme  (Chien = sorte de Animal)
//# sourceMappingURL=heritage.js.map