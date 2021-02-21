
'use strict';

const mainPage = {
    name: 'Salmon Cookies stand ',
    logo: './imgs/salm.png',
    salesLink : './sales.html'
,
render: function() {
const parentElement = document.getElementById('Fish');

const h2Element = document.createElement('h2');
 parentElement.appendChild(h2Element);
 h2Element.textContent = this.name;
//console.log (h2Element);


const logoElement = document.createElement('img');
parentElement.appendChild(logoElement);
logoElement.setAttribute('src', this.logo); 


const a = document.createElement('a');
const linkText = document.createTextNode("View sales page");
a.appendChild(linkText);
a.title = "my title text";
a.href = "sales.html";
parentElement.appendChild(a);

}};
 mainPage.render();




// let minNumber=23 ;
// let maxNumber=65 ;
