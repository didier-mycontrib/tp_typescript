let tabNum= [ 12 , 25, 26, 3 , 7];

function minValTab(tab: number[] | null):number{
    let mini=9999999999999;
    if(tab==null) 
        return 0;
    /*
    //v1: ecrire le code en s'appuyant sur un appel à .length
    let taille = tab.length;
    for(let i=0;i<taille;i++){
        if(tab[i]<mini) mini=tab[i];
    }
     */
    //v2 ou v3 , variante de parcours  avec for(...of ...)
   for(let val of tab){
    if(val<mini) mini=val;
   }
    //retourner plus petite valeur du tableau
    return mini;
}

let valMin= minValTab(tabNum);
console.log("valMin="+valMin);

valMin= minValTab(null);
console.log("valMin="+valMin);
//+ affichage