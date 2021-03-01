const moduleX = (function () {

    return initializeBlock;

    // **
    // ------------------------
    // **

    function initializeBlock(ctx) {
        console.log(ctx); // 1
    }

})();


 //modlueX(); === undefined

// TDZ -- ?
"use strict";

//ES6  
let i, button;
const array_Result = [];
const requests = 4;

class User{
    constructor(obj){
        this.alertText = obj.title;
        this.button = obj.id;
        button = document.createElement("button");
        document.body.append(button);
        button.innerText = this.button;
        button.onclick = () => alert(this.alertText);
    }
}

for (i = 1; i <= requests; i++){                     
   
    (async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
        let result = await response.json();
        fun(result);
    })();
}

let fun = function(params) {
    console.log(params)
    array_Result.push(params)
   
    if(array_Result.length == requests){
        array_Result.sort((a,b) => a.id - b.id)
        array_Result.forEach(element => {
            new User(element)
        });
    }
}