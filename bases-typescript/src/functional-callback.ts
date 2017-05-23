class XyResponse<T>{
    constructor(public data :T,
                public status :boolean){
                }
}

class XyRequest<T>{
    constructor(public data : T){
                }
}

interface XyResponseCallBack<T> {
    (response : XyResponse<T>) : void;
}

class XyAsyncSimulation{
  public sendAsyncResquest<T>(request : XyRequest<T> ,
                           callback : XyResponseCallBack<T>){
     let response :XyResponse<T> = new XyResponse<T>(
       request.data , true);

      //appel immediat ou apres traitement long (tp simple):
      callback(response);
     }
}

//test:
var xyAsync = new XyAsyncSimulation();
var req = new XyRequest<string>("abc");

xyAsync.sendAsyncResquest(req,
    (resp)=> { console.log("data chaine= " + resp.data
                        + " , status= " + resp.status); }
            );

var reqNumber = new XyRequest<number>(150);
xyAsync.sendAsyncResquest(reqNumber,
    (resp)=> { console.log("data numerique= " + resp.data
                        + " , status= " + resp.status); }
            );
