class SimpleApp {

    x:number;
    y:number;

    init(){
        var btnAdd = document.getElementById("btnActionXy");
		
		btnAdd.addEventListener('click', (evt) => this.onActionXy(evt) , false);
    }

    onActionXy(evt:any){
        console.log(evt.target.value);
        this.x = Number( (<any> document.getElementById("x")).value );
        this.y = Number( (<any> document.getElementById("y")).value );
        var spanRes: any = document.getElementById("resultat");
        console.log("x:" + this.x +  ",y=" + this.y);
        spanRes.innerHTML = this.x + this.y;   
    }

}

var app = new SimpleApp();

