var element;
document.getElementById("header").addEventListener("click",xyz);



function xyz(){
    document.getElementById("header").classList.toggle("xyz");
    // toggle aik click krne per class ko add krta hai aur aik click krne per class ko remove krta hai 
    // document.getElementById("header").classList.add("xyz", "bhu", "freww");
    // is trh jitni marzi classes add krna chahayn krskte hain 
    // document.getElementById("header").classList.remove("xyz", "bhu");
    // isse remove hojatin hain classes jitni merzi krna chahayn 


}


var a;
// a = document.getElementById("header").classList;
// a = document.getElementById("header").classList.length;
// yeh length return krta hai 
// a = document.getElementById("header").classList.item(0);

// yani classlist list hai jo uski 1st index per mojud item ko return krdo 

a = document.getElementById("header").classList.contains("xyz");
// yeh bool return karega ager hogi tou t werna f 

console.log(a);