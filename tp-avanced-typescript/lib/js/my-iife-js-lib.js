//begin of IIFE module myIifeJsLib
var myIifeJsLib = (function () { 
//---------------------------
function internal_divide_in_iife_js_lib(a,b){
	return a/b;
}

function internal_mult_in_iife_js_lib (x,y){
	return x*y;
}

function internal_carre_in_iife_js_lib (x){
	return internal_mult_in_iife_js_lib(x,x);
}


var selfModuleWithPublicMethods = {
	divide : internal_divide_in_iife_js_lib,
	carre : internal_carre_in_iife_js_lib
};
return selfModuleWithPublicMethods;

//end of IIFE module myJsLib
})();
//---------
