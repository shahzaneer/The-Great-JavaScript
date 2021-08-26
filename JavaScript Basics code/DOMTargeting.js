// var element;

// element = document.getElementById("header");
// console.log(element);
// // issi trh hum Urls domains etc bhi return krwaskte hain . base url , yeh pura url return krta hai 


//how to get the elements

var element;

element = document.getElementById("header").innerText;
// yeh header me mojud inner text return karega 
// console.log(element);
ele = document.getElementById("content").innerHTML;
// yeh poori html return krega jo likhi hui hogi
// console.log(ele);

elem = document.getElementById("header").getAttribute("id");
// console.log(elem);
// yeh attribute jo dia jata hai usse return krta hai lekin oehke target ka naam dena parta hai id class onclick etc kisi bhi cheez ka attribute name find krstke hain is trh
elee = document.getElementById("sidebar").getAttributeNode("style");


// console.log(elee);
// yeh arttribute k saath saath uski value bhi return krdeta hai 

elemee = document.getElementById("sidebar").attributes[0].name;
// console.log(elemee); 
// yun app tamaam attributes ko dekh skte hain 
// mazzed yeh k array ki trh inki value bhi dhoondh skte hain .name se ayega name attribute ka aur .value se ayegi uski value 



// how to set dom value

document.getElementById("header").innerText = "Shahzaneer Ahmed"

// abc = document.getElementById("header").innerText;
// console.log(abc);
// yun hum change keskte hain value ko  lekin iske liay pehle get krna houti hai phir set krna houti hai lekin yeh simple text ki trh hui hai add html ki trh nhi hui hai add iskay liay innerHtml wali property lagegi 

document.getElementById("header").innerHTML = "<h1>Shahzaneer Ahmed</h1>"
// uper set krte huay tag ka use krna hai 

// abc = document.getElementById("header").innerHTML;
// console.log(abc);

document.getElementById("sidebar").setAttribute("class","xyz");

abcd = document.getElementById("sidebar").getAttribute("class");
// console.log(abcd);
// yun hum id k attribute ko change krskte hain direct js se . js the chad !


document.getElementById("sidebar").removeAttribute("style");

a = document.getElementById("sidebar").attributes;

console.log(a);
// is trh kisi ka bhi koi bhi attribute remove kia jaskta hai through js 








