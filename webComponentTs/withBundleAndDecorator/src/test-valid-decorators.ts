function getInUppercase(target: Object, propertyName: string) {
    //target is protype objet of current object
    let value: any /*= Reflect.get(target,propertyName)*/; //will be used in subscoped get / set arrow functions
    Reflect.defineProperty(
        target,
        propertyName,
        {
            configurable: true,
            enumerable: true,
            get: () => {
                //console.log(">>> myLogPropertyDecorator , get value of propertyName=" + propertyName + " : " + value);
                if (value && typeof value == 'string')
                    return value.toUpperCase();// little adaptation
                else
                    return value;
            },
            set: (newValue: number) => {
                //console.log(">>> myLogPropertyDecorator , set newValue of propertyName=" + propertyName + " : " + newValue);
                value = newValue;
            }
        },
    );
}


function Min(minimum: number) {
    return function (target: Object, propertyKey: string) {
        let value: number /*= Reflect.get(target,propertyKey);*/
        const getter = () => value;
        const setter = (newVal: number) => {
            if (newVal < minimum) {
                value=0;//set a default valid value
                //store errors fields in object
                let errMsg= `value for ${propertyKey} must be bigger than ${minimum} but was ${newVal}`;
                console.log(">>>ERROR: "+errMsg);
                throw errMsg;
            }
            else {
                value = newVal;
            }
        };

        Reflect.defineProperty(target, propertyKey, {
            configurable: true, enumerable: true,
            get: getter,
            set: setter
        });
    }
}



class Person {

    @getInUppercase
    username: string;

    @Min(0)
    size: number;

    constructor(username: string = "toto", size: number = 0) {
        this.username = username;
        this.size = size;
    }
}

let p1 = new Person("toto", 180);
console.log("p1.username=" + p1.username + " p1.size=" + p1.size);

try{
p1.size=-33;}
catch(ex){
    console.log("EXECEPTION: " + ex);
}
console.log("p1.size=" + p1.size);

p1.size=44;
console.log("p1.size=" + p1.size);
