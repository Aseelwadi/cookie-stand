'use strict';

function SalmonCookies(loc, minCust, maxCust, avrg) {
  this.loc = loc,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avrg = avrg;
  SalmonCookies.allLocs.push(this);
  this.totalPerHour = [];
}
SalmonCookies.allLocs = [];

// locations objects need created by the constructor
let $loc1 = new SalmonCookies('Seattle', 23, 65, 6.3);
let $loc2 = new SalmonCookies('Tokyo', 3, 24, 1.2);
let $loc3 = new SalmonCookies('Dubai', 11, 38, 3.7);
let $loc4 = new SalmonCookies('Paris', 20, 38, 2.3);
let $loc5 = new SalmonCookies('Lima', 2, 16, 4.6);



SalmonCookies.prototype.showData = compile;

let cookiesTable = document.getElementById('cookiesTable');
// 
function getAvrgCookies(location) {
  let randNum = Math.floor(Math.random() * (location.maxCust - location.minCust + 1) + location.minCust);
  let total = location.avrg * randNum;
  return Math.round(total);
}

//function to display time google
function makeTime(hour) {
  let date = new Date(`Feb 22, 2021 ${hour}:00:00`);
  let dateOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  return date.toLocaleString('en-US', dateOptions);
}

//  (6am - 8pm)
let timeOnTableRow = document.getElementById('times-row');

for (var i = 6; i <= 20; i++) {
  var timesOnTable = document.createElement('th');
  timesOnTable.textContent = makeTime(i);
  timeOnTableRow.appendChild(timesOnTable);
}


var totalHeader = document.createElement('th');
totalHeader.textContent = 'Total';
timeOnTableRow.appendChild(totalHeader);


function compile() {
  var sum = 0;
  var locationRow = document.getElementById('locations-and-data');
  var locationName = document.createElement('tr');
  locationName.textContent = this.loc;
  locationName.className = 'column1';

  
  for (var i = 6; i <= 20; i++) {
    var averageCookies = getAvrgCookies(this);
    sum += averageCookies;
    this.totalPerHour.push(averageCookies);
    var locationData = document.createElement('td');
    locationData.textContent = averageCookies;
    locationName.appendChild(locationData);
    locationRow.appendChild(locationName);
  }

  var showTotal = document.createElement('td');
  showTotal.textContent = sum;
  locationName.appendChild(showTotal);
  console.log(`${this.loc}'s total is ${sum}`);
  finalCompiler();
}


$loc1.showData();
$loc2 .showData();
$loc3.showData();
$loc4.showData();
$loc5.showData();

function formNewLoc(e) {
  e.preventDefault();
  console.log('Form submitted with new item' + e);
  var locFromForm = new SalmonCookies(e.target.locName.value, parseInt(e.target.locMin.value), parseInt(e.target.locMax.value), parseInt(e.target.locAvrg.value));
  locFromForm.showData();
}




//function to create the dynamic footer
function finalCompiler() {
  cookiesTable.deleteTFoot();
  var newFoot = document.createElement('tfoot');
  cookiesTable.appendChild(newFoot);
  var footRow = document.createElement('tr');
  newFoot.appendChild(footRow);
  var footTotalTitle = document.createElement('th');
  footTotalTitle.textContent = 'Total';
  footRow.appendChild(footTotalTitle);
  var calcGrandTotal = 0;
  for (var r = 0; r < 15; r++){
    var dailySum = 0;
    for (var j = 0; j < SalmonCookies.allLocs.length; j++) {
      dailySum += SalmonCookies.allLocs[j].totalPerHour[r];
    }
    var hourlyTotal = document.createElement('td');
    hourlyTotal.textContent = dailySum;
    footRow.appendChild(hourlyTotal);
    calcGrandTotal += dailySum;
  }
  var grandTotal = document.createElement('td');
  grandTotal.textContent = `Grand Total: ${calcGrandTotal}`;
  footRow.appendChild(grandTotal);
}























// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

//   let num=0;

// let Seattle= {
//     shopLocation : 'Seattle',
//       minNumber : 23 ,
//      maxNumber : 65 ,
//      avg :6.3,
//      cookies:[],
     
//      saleTime :['6am :','7am : ','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm','8pm'],
//     coustomerNumber:[],
    
//     randomCoustm:function(){
//         for(let i=0 ;i<this.saleTime.length;i++)
//         {
//         this.coustomerNumber.push(generateRandomNumber(this.minNumber, this.maxNumber));
//         console.log('coustomerNumber');
//         }
    
//     },
//      cookeisNumber : function()

//      { 
//          console.log('cokies')
     
//         for(let i=0 ;i<this.saleTime.length;i++)
//         { 
//          this.cookies.push(Math.ceil(this.coustomerNumber[i]* this.avg) );

//             num =num + this.cookies[i];
//             console.log(this.cookies);
            
            
//         }
               
//      },
//      render: function() {
//         const parentElement = document.getElementById('saleslist');

//         const h2Element = document.createElement('h2');
//         parentElement .appendChild(h2Element);
//         h2Element.textContent = this.shopLocation;
    
    
    
//         const ulElement = document.createElement('ul');
//         parentElement.appendChild(ulElement);
        
//         for(let i = 0; i < this.saleTime.length; i++) {
//           let liElement = document.createElement('li');
//           ulElement.appendChild(liElement);
//           liElement.textContent = `${this.saleTime[i]}  ${this.cookies[i]} cookies`;
        
//         }
//         let liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         liElement.textContent = `Total : ${num}`;  

//          }


//     };
//      Seattle.randomCoustm();
//      Seattle.cookeisNumber();
//      Seattle.render();
     
    
//     //-------------------------------------------------

//     let Tokyo= {
//         shopLocation : 'Tokyo',
//           minNumber : 3 ,
//          maxNumber : 24 ,
//          avg :1.2,
//          cookies:[],
         
//          saleTime :['6am :','7am : ','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm','8pm'],
//         coustomerNumber:[],
        
//         randomCoustm:function(){
//             for(let i=0 ;i<this.saleTime.length;i++)
//             {
//             this.coustomerNumber.push(generateRandomNumber(this.minNumber, this.maxNumber));
//             console.log('coustomerNumber');
//             }
        
//         },
//          cookeisNumber : function()
    
//          { 
//              console.log('cokies')
         
//             for(let i=0 ;i<this.saleTime.length;i++)
//             { 
//              this.cookies.push(Math.ceil(this.coustomerNumber[i]* this.avg) );
    
//                 num =num + this.cookies[i];
//                 console.log(this.cookies);
                
                
//             }
                   
//          },
//          render: function() {
//             const parentElement = document.getElementById('saleslist');
    
//             const h2Element = document.createElement('h2');
//             parentElement .appendChild(h2Element);
//             h2Element.textContent = this.shopLocation;
        
        
        
//             const ulElement = document.createElement('ul');
//             parentElement.appendChild(ulElement);
            
//             for(let i = 0; i < this.saleTime.length; i++) {
//               let liElement = document.createElement('li');
//               ulElement.appendChild(liElement);
//               liElement.textContent = `${this.saleTime[i]}  ${this.cookies[i]} cookies`;
            
//             }
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `Total : ${num}`;  
    
//              }
    
    
//         };
//         Tokyo.randomCoustm();
//         Tokyo.cookeisNumber();
//         Tokyo.render();

//   //-------------------------------------------------------------------


// let Dubai= {
//         shopLocation : 'Dubai',
//           minNumber : 11,
//          maxNumber : 38 ,
//          avg :3.7,
//          cookies:[],
         
//          saleTime :['6am :','7am : ','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm','8pm'],
//         coustomerNumber:[],
        
//         randomCoustm:function(){
//             for(let i=0 ;i<this.saleTime.length;i++)
//             {
//             this.coustomerNumber.push(generateRandomNumber(this.minNumber, this.maxNumber));
//             console.log('coustomerNumber');
//             }
        
//         },
//          cookeisNumber : function()
    
//          { 
//              console.log('cokies')
         
//             for(let i=0 ;i<this.saleTime.length;i++)
//             { 
//              this.cookies.push(Math.ceil(this.coustomerNumber[i]* this.avg) );
    
//                 num =num + this.cookies[i];
//                 console.log(this.cookies);
                
                
//             }
                   
//          },
//          render: function() {
//             const parentElement = document.getElementById('saleslist');
    
//             const h2Element = document.createElement('h2');
//             parentElement .appendChild(h2Element);
//             h2Element.textContent = this.shopLocation;
        
        
        
//             const ulElement = document.createElement('ul');
//             parentElement.appendChild(ulElement);
            
//             for(let i = 0; i < this.saleTime.length; i++) {
//               let liElement = document.createElement('li');
//               ulElement.appendChild(liElement);
//               liElement.textContent = `${this.saleTime[i]}  ${this.cookies[i]} cookies`;
            
//             }
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `Total : ${num}`;  
    
//              }
    
    
//         };
//         Dubai.randomCoustm();
//         Dubai.cookeisNumber();
//         Dubai.render();

//         //---------------------------------------------------------------
//         let Paris= {
//             shopLocation : 'Paris',
//               minNumber : 20,
//              maxNumber : 38 ,
//              avg :2.3,
//              cookies:[],
             
//              saleTime :['6am :','7am : ','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm','8pm'],
//             coustomerNumber:[],
            
//             randomCoustm:function(){
//                 for(let i=0 ;i<this.saleTime.length;i++)
//                 {
//                 this.coustomerNumber.push(generateRandomNumber(this.minNumber, this.maxNumber));
//                 console.log('coustomerNumber');
//                 }
            
//             },
//              cookeisNumber : function()
        
//              { 
//                  console.log('cokies')
             
//                 for(let i=0 ;i<this.saleTime.length;i++)
//                 { 
//                  this.cookies.push(Math.ceil(this.coustomerNumber[i]* this.avg) );
        
//                     num =num + this.cookies[i];
//                     console.log(this.cookies);
                    
                    
//                 }
                       
//              },
//              render: function() {
//                 const parentElement = document.getElementById('saleslist');
        
//                 const h2Element = document.createElement('h2');
//                 parentElement .appendChild(h2Element);
//                 h2Element.textContent = this.shopLocation;
            
            
            
//                 const ulElement = document.createElement('ul');
//                 parentElement.appendChild(ulElement);
                
//                 for(let i = 0; i < this.saleTime.length; i++) {
//                   let liElement = document.createElement('li');
//                   ulElement.appendChild(liElement);
//                   liElement.textContent = `${this.saleTime[i]}  ${this.cookies[i]} cookies`;
                
//                 }
//                 let liElement = document.createElement('li');
//                 ulElement.appendChild(liElement);
//                 liElement.textContent = `Total : ${num}`;  
        
//                  }
        
        
//             };
//             Paris.randomCoustm();
//             Paris.cookeisNumber();
//             Paris.render();
// //-------------------------------------------------

// let Lima= {
//     shopLocation : 'Lima',
//       minNumber : 20,
//      maxNumber : 38 ,
//      avg :2.3,
//      cookies:[],
     
//      saleTime :['6am :','7am : ','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm','8pm'],
//     coustomerNumber:[],
    
//     randomCoustm:function(){
//         for(let i=0 ;i<this.saleTime.length;i++)
//         {
//         this.coustomerNumber.push(generateRandomNumber(this.minNumber, this.maxNumber));
//         console.log('coustomerNumber');
//         }
    
//     },
//      cookeisNumber : function()

//      { 
//          console.log('cokies')
     
//         for(let i=0 ;i<this.saleTime.length;i++)
//         { 
//          this.cookies.push(Math.ceil(this.coustomerNumber[i]* this.avg) );

//             num =num + this.cookies[i];
//             console.log(this.cookies);
            
            
//         }
               
//      },
//      render: function() {
//         const parentElement = document.getElementById('saleslist');

//         const h2Element = document.createElement('h2');
//         parentElement .appendChild(h2Element);
//         h2Element.textContent = this.shopLocation;
    
    
    
//         const ulElement = document.createElement('ul');
//         parentElement.appendChild(ulElement);
        
//         for(let i = 0; i < this.saleTime.length; i++) {
//           let liElement = document.createElement('li');
//           ulElement.appendChild(liElement);
//           liElement.textContent = `${this.saleTime[i]}  ${this.cookies[i]} cookies`;
        
//         }
//         let liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         liElement.textContent = `Total : ${num}`;  

//          }


//     };
//     Lima.randomCoustm();
//     Lima.cookeisNumber();
//     Lima.render();
