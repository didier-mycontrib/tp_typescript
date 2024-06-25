class Serie<T> {
    private name : string="serie";
    private tabVal : T[]=[];
    
    constructor(name:string="serie" , tabVal : T[]=[]){
        this.name=name;
        this.tabVal=tabVal;
    }

    push(val:T){
        this.tabVal.push(val);
    }
}


   let serie1 = new Serie("serieFibonacci",[1,2,3]);
   serie1.push(5);serie1.push(8);serie1.push(13);serie1.push(21);//[1,2,3 , 5, 8,13 ]
   console.log(JSON.stringify(serie1));

   let serie2 : Serie<string>;
 serie2 = new Serie("seriePays",['France', 'Allemagne','Espagne', 'Italie']);
 serie2.push('Belgique');
 console.log(JSON.stringify(serie2));