class AnimalDomestique {
    name:string;
    constructor(name: string ="defaultAnimalName") { this.name= name;}
    decrire(){ console.log("AnimalDomestique nom=" + this.name );}
    parler(){  console.log("…") ; }
}


class Chat extends AnimalDomestique {
    nbHeuresSommeil /*:number */ = 14 ;
    constructor(name: string = "defaultCatName") { super(name); }
    decrire() {
        console.log("Je suis un chat qui dort " +this.nbHeuresSommeil + " h");
        super.decrire();
    }
    parler() { console.log("miaou miaou") ; }
    ronronner() { console.log("ronron...") ; }
}

class Chien extends AnimalDomestique {
    fonction : string | undefined ;
    constructor(name: string = "defaultDogName") { super(name); }
    decrire() {
        console.log("Je suis un chien , fonction=" + this.fonction );
        super.decrire();
    }
    parler() { console.log("whaouf whaouf") ; }
    monterLaGarde() { console.log("je monte la garde ...") ; }
}

var a = new AnimalDomestique(); //var a = new AnimalDomestique("animal");
a.decrire() ; //AnimalDomestique nom=defaultAnimalName

var chat1 = new Chat("malo");  //var chat1 = new Chat();
chat1.ronronner() ; //ronron
chat1.decrire() ; // Je suis un chat qui dort 14h AnimalDomestique nom=malo
chat1.parler(); // miaou miaou

var a2: AnimalDomestique = new Chien("Rantanplan");
if(a2 instanceof Chien) 
     ( <Chien> a2 ).monterLaGarde();
a2.decrire(); //Je suis un chien fonction=undefined AnimalDomestique nom=Rantanplan
a2.parler() ; // whaouf whaouf  //polymorphisme  (Chien = sorte de Animal)
