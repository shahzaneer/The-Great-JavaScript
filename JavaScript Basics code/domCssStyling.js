var element;
//style 
// element = document.querySelector('#header').style.color;
// style k through hum css k attributes get krskte hain 

// document.querySelector("#header").style.backgroundColor = "tan";
// is trh hum css set bhi krskte hain through js issi trh ager koi aisi property aye jo do names me ho usko ikhatta likhte hain camel case me 

//className

// document.querySelector("#header").className = "abc xyz"
// abc naami class header per set krdi gyi hai  
// yhan abc aur xyz do alag alag classes hain aur set hoti hai second wali class usko priority milti hai 

// element = document.querySelector("#header").className;

//classlist
document.querySelector("#header").classList = "abc xyz";
document.querySelector("#header").classList.add("qpr");
// isse add hojayegi aik aur class issi trh aik method hai .remove jisse remove hojayega 


element = document.querySelector("#header").classList;

//classList aik list return karegi domtokenlist k name se jisme tamaam classes mojud hongi 




console.log(element);