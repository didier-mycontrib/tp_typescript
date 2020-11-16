class GenericNumberUtil<T> {
    zeroValue: T;
    add (x: T, y: T) : T {
         return <T> <any>(Number(x)+Number(y)) ;
     }
}

var myGenericNumber = new GenericNumberUtil<number>();
myGenericNumber.zeroValue = 0;
var resAddAsNumber :number = myGenericNumber.add(5,6); //return 11
console.log('resAddAsNumber='+resAddAsNumber);

var stringNumeric = new GenericNumberUtil<string>();
stringNumeric.zeroValue = "";
var resAddAsString :string = stringNumeric.add("5","6") ; //return "11"
console.log('resAddAsString='+resAddAsString);