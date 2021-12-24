"use strict";

let body = document.body;
let title = document.createElement('h1');
let titleText = document.createTextNode("2022 New Years");
title.appendChild(titleText);
body.appendChild(title);

let subtitle = document.createElement('h2');
let subtitleText = document.createTextNode("style by Princess Polly");
subtitle.appendChild(subtitleText);
body.appendChild(subtitle);
let earrings = document.createElement('img');
earrings.src = "NYE/unnamed-5.jpg";
earrings.id = "earring";
earrings.className = "earring";
earrings.style.height = "273px";
earrings.style.width = "202px";
earrings.addEventListener("mouseover", handleEarringEnter);



let earringDiv = document.createElement("img");
earringDiv.src = "NYE/earrings.png";
earringDiv.style.height = "273px";
earringDiv.style.width = "202px";
earringDiv.id = "earringDiv";
earringDiv.addEventListener("click", earringLink);
earringDiv.addEventListener("mouseleave", handleEarringLeave);




let necklace = document.createElement('img');
necklace.src = "NYE/unnamed-6.jpg";
necklace.id = "necklace";
necklace.className = "necklace";
necklace.style.height = "364px";
necklace.style.width = "269px";
// necklace.addEventListener("click", earringsLink);
necklace.addEventListener("mouseover", handleNecklaceEnter);
let necklaceDiv = document.createElement("img");
necklaceDiv.src = "NYE/necklace.png";
necklaceDiv.style.height = "364px";
necklaceDiv.style.width = "269px";
necklaceDiv.id = "necklaceDiv";
necklaceDiv.addEventListener("click", necklaceLink);
necklaceDiv.addEventListener("mouseleave", handleNecklaceLeave);



let dress = document.createElement('img');
dress.src = "NYE/unnamed.jpg";
dress.id = "dress";
dress.className = "dress";
dress.style.height = "728px";
dress.style.width = "538px";
dress.addEventListener("mouseover", handleDressEnter);
let dressDiv = document.createElement("img");
dressDiv.src = "/Users/rianbrumfield/brumrian.github.io/src/NYE/dress.png";
dressDiv.style.height = "728px";
dressDiv.style.width = "538px";
dressDiv.id = "dressDiv";
dressDiv.addEventListener("click", dressLink);
dressDiv.addEventListener("mouseleave", handleDressLeave);



dress.addEventListener("mouseover", handleDressEnter);

let purse = document.createElement('img');
purse.src = "NYE/unnamed-3.jpg";
purse.id = "bag";
purse.style.height = "546px";
purse.style.width = "404px";
purse.addEventListener("mouseover", handlePurseEnter);
let purseDiv = document.createElement("img");
purseDiv.src = "NYE/bag.png";
purseDiv.style.height = "546px";
purseDiv.style.width = "404px";
purseDiv.id = "purseDiv";
purseDiv.addEventListener("click", purseLink);
purseDiv.addEventListener("mouseleave", handlePurseLeave);



let boots = document.createElement('img');
boots.src = "NYE/unnamed-2.jpg";
boots.id = "boots";
boots.style.height = "637px";
boots.style.width = "471px";
boots.addEventListener("mouseover", handleBootsEnter);
let bootsDiv = document.createElement("img");
bootsDiv.src = "NYE/boots.png";
bootsDiv.style.height = "637px";
bootsDiv.style.width = "471px";
bootsDiv.id = "bootsDiv";
bootsDiv.addEventListener("click", bootsLink);
bootsDiv.addEventListener("mouseleave", handleBootsLeave);


let breakln = document.createElement('br');
let breakln1 = document.createElement('br');


body.appendChild(earrings);
body.appendChild(necklace);
body.appendChild(breakln);
body.appendChild(dress);
body.appendChild(purse);
body.appendChild(breakln1);
body.appendChild(boots);

function earringLink(){
    window.location = "https://us.princesspolly.com/products/fly-high-earrings-ivory";
}

function handleEarringEnter(){

body.replaceChild(earringDiv, earrings);

}
function handleEarringLeave(){
    body.replaceChild(earrings, earringDiv);

}

function necklaceLink(){
    window.location = "https://us.princesspolly.com/products/a-thousand-dreams-necklace-gold-multi";
}

function handleNecklaceEnter(){

    body.replaceChild(necklaceDiv, necklace);

}

function handleNecklaceLeave(){

    body.replaceChild(necklace, necklaceDiv);

}

function dressLink(){
    window.location = "https://us.princesspolly.com/products/party-time-mini-dress-green";
}

function handleDressEnter(){
    body.replaceChild(dressDiv, dress);

}

function handleDressLeave(){
    body.replaceChild(dress, dressDiv);

}

function purseLink(){
    window.location = "https://us.princesspolly.com/products/highland-bag-brown";
}

function handlePurseEnter(){
    body.replaceChild(purseDiv, purse);

}

function handlePurseLeave(){
    body.replaceChild(purse, purseDiv);

}

function bootsLink(){
    window.location = "https://us.princesspolly.com/products/montgomery-boot-off-white-croc";
}

function handleBootsEnter(event){
    body.replaceChild(bootsDiv, boots);

}

function handleBootsLeave(event){
    body.replaceChild(boots, bootsDiv);

}
