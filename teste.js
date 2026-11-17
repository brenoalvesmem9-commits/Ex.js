"use strict";

function maiorNumero(a,b,c){
    if (a>b && a > c){
        return a
    }else if(b>c){
        return b
    }else 
        return c
}
 
let a = 15;
let b = 30;
let c = 20;

console.log(maiorNumero(a,b,c));