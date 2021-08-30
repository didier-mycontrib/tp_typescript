class PersonneV3 {
  //private _age : number;

  //NB: #age : number est une syntaxe javascript très récente (environ 2020)
  //qui n'est supportée qu'avec target="es2015" ou plus coté tsconfig.json
  // le #signifie que #age est privée 
  #age : number;

  constructor(public numero :number|undefined = undefined,
              public nom : string ="?"){
    this.#age = 0;
  }

  get age() : number { return this.#age;}
  set age(newAge: number)  {
    if(newAge>=0)
       this.#age = newAge;
    //else console.log("age negatif interdit");
    else throw "age negatif invalide"
  }

  incrementerAge():void {
    this.#age++;
  }
}

var p1v3 : PersonneV3  = new PersonneV3(1,"toto");
//p1v3.#age = 30; interdit car #age considéré comme privé car commencant par #
p1v3.age = 30; 
try{
  p1v3.age = -50;
}
catch(e){
  console.log(e);
}
console.log("age de p1 :" + p1v3.age); //30
console.log("numero de p1 :" + p1v3.numero);
console.log("p1v3="+JSON.stringify(p1v3));
p1v3.incrementerAge() ;
console.log("nouvel age de p1 :" + p1v3.age); //31

