// document.getElementById("header").onclick = abc;
// document.getElementById("header").onmouseenter = abc;
//yani yahan jese hi mouse enter ho ;
// document.getElementById("header").addEventListener("click",abc);
//is me on nhi likhna houta 

// document.getElementById("header").addEventListener("mouseenter", function(){
    // document.getElementById("header").style.background = "yellow";
    // document.getEmlementbyId("header"). ko hum uper bhi likh chukay hain tou isko short krne k liay hum "this" ka leyword use kersktay hain
    // this.style.background = "yellow"; 
//  })
//is ttareekay se hum direct function bhi banaskte hain jo direct kaam krta hai lekin uska koi naam nhi houta
//addEventListner ka faida yeh hai k baiq waqt kaye events lagaye jaskte hain
// isme aik hi event do aur usse zyada baar bhi lagaya jaskta hai  

// function abc(){
//     document.getElementById("header").style.border = "5px solid red";
// }


document.getElementById("header").addEventListener("mouseleave", abc);

// to remove this 
document.getElementById("header").addEventListener('click', xyz);

function xyx(){
    document.getElementById("header").removeEventListener('mouseleave', abc);
    document.getElementById("header").style.backgroundColor = "green";
};

function abc(){
    document.getElementById("header").style.background = "red";
};

