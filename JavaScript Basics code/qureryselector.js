var element;

document.querySelector("#header").innerHTML = "<h1>ABCD</h1>"
//yun bhi js change krdeta hai element ko 
// element = document.querySelector(".list");
// querySelector pehle aanay wali cheez ko karegi target 
// ul per pehle thi class list aur p per baad men thi 

// element = document.querySelectorAll(".list")[0].innerHTML;
//yeh list naami tamaam classes ki array return krdegi


element = document.querySelectorAll("ul")[0].innerHTML;
// all walay me css selectors k elawa tagnames bhi diay jaskte hain 



console.log(element);
