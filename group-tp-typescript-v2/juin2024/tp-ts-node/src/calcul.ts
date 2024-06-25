
function addition(a :number,b :number) :number{
    let res:number = a+b;
    console.log(`pour a=${a} ,b=${b} res=(a+b)=${res} `);
    return res;
}

let res = addition(5,6);
console.log("res="+res);