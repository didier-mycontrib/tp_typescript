const obj1 = {
  text: "aaa",
  ok: false,
  tags: ["v1"],
};
console.log("obj1="+ JSON.stringify(obj1));

const obj2 = JSON.parse(JSON.stringify(obj1)); //deep copy .
const obj3 = { ...obj1 }; //shallowCopy (not an deep copy , same sub-array)


console.log("obj2="+JSON.stringify(obj2));
console.log("obj3="+JSON.stringify(obj3));
 
obj2.text = "bbb"; obj2.ok = true; obj2.tags.push("v2");
console.log("after obj2update, obj1="+JSON.stringify(obj1));
console.log("after obj2update, obj2="+JSON.stringify(obj2));

obj3.text = "ccc"; obj3.ok = true; obj3.tags.push("v3");
console.log("after obj3update, obj1="+JSON.stringify(obj1));
console.log("after obj3update, obj3="+JSON.stringify(obj3));

//------------------- keyof operator --------


interface Infos {
	text : string;
	ok : boolean;
	tags : string[];
}

const obj4 : Infos = {
  text: "ddd",
  ok: false,
  tags: ["d1"],
};

type UnionTypesProprietes = keyof Infos; // string | boolean | string[]


function propV1(obj: Object, key: string) {
  return obj[key];
}

function propV2<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let propOk1 = propV1(obj4,'ok'); //boolean but inferred as any by typescript
propOk1 = 3;

let propOk2 = propV2(obj4,'ok'); //boolean and inferred as boolean  by typescript
//propOk2 = 3; //error number is not assignable to  boolean  !!!!

//--------- never type (proche de void) : ne retourne rien (tout le temps)

function functionThrow(): never {
     throw new Error("This function return never");
}

//----------- Tuple type (pour tableaux particuliers)
// petit nombre d'éléments connus , types connus et éventuellement différents

type EntryXy = [ number , string];
let myBasicMap : EntryXy[] = [];
myBasicMap.push( [1,"un"]);
//myBasicMap.push( ["2","deux"]); //Error
myBasicMap.push( [2,"deux"]); 
for(let association of myBasicMap){
    let [clefNum , stringVal ] = association;
    //clefNum="abc"; //Error Type 'string' is not assignable to type 'number'
    stringVal = stringVal.toLowerCase();
    console.log(`${clefNum} : ${stringVal}`)
}

//----------- litteral type (quelques valeurs possibles)

type Direction = "nord" | "sud" | "est" | "ouest";
let direction : Direction ;
direction = "nord"; //ok
//direction = "vers_le_nord"; //Error
let directionQuelconque : string;
directionQuelconque = direction;
console.log(directionQuelconque);

type Chiffre = 0 | 1 | 2 | 3 |  4 | 5 | 6 | 7 | 8 | 9;
let chiffre : Chiffre ;
chiffre = 6 ; //OK
//chiffre =33; //Erreur
let nombreQuelconque : number;
nombreQuelconque = chiffre;
console.log(nombreQuelconque);
