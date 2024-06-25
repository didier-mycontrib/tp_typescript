function addition(a:number, b:number):number{
    let res:number;
    res= a+b;
    console.log(`pour a=${a} ,b=${b} res=(a+b)=${res} `);
    return res; 
}

let c = addition(6,7);
console.log(c);
