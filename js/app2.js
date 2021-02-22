'use strict';

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let num=0;

let Seattle= {
    shopLocation : 'Seattle',
      minNumber : 23 ,
     maxNumber : 65 ,
     avg :6.3,
     cookies:[],
     
     saleTime :['6am :','7am : ','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm','8pm'],
    coustomerNumber:[],
    
    randomCoustm:function(){
        for(let i=0 ;i<this.saleTime.length;i++)
        {
        this.coustomerNumber.push(generateRandomNumber(this.minNumber, this.maxNumber));
        console.log('coustomerNumber');
        }
    
    },
     cookeisNumber : function()

     { 
         console.log('cokies')
     
        for(let i=0 ;i<this.saleTime.length;i++)
        { 
         this.cookies.push(Math.ceil(this.coustomerNumber[i]* this.avg) );

            num =num + this.cookies[i];
            console.log(this.cookies);
            
            
        }
               
     },
     render: function() {
        const parentElement = document.getElementById('saleslist');

        const h2Element = document.createElement('h2');
        parentElement .appendChild(h2Element);
        h2Element.textContent = this.shopLocation;
    
    
    
        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);
        
        for(let i = 0; i < this.saleTime.length; i++) {
          let liElement = document.createElement('li');
          ulElement.appendChild(liElement);
          liElement.textContent = `${this.saleTime[i]}  ${this.cookies[i]} cookies`;
        
        }
        let liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `Total : ${num}`;  

         }


    };
     Seattle.randomCoustm();
     Seattle.cookeisNumber();
     Seattle.render();
     
    
    //-------------------------------------------------

    let Tokyo= {
        shopLocation : 'Tokyo',
          minNumber : 3 ,
         maxNumber : 24 ,
         avg :1.2,
         cookies:[],
         
         saleTime :['6am :','7am : ','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm','8pm'],
        coustomerNumber:[],
        
        randomCoustm:function(){
            for(let i=0 ;i<this.saleTime.length;i++)
            {
            this.coustomerNumber.push(generateRandomNumber(this.minNumber, this.maxNumber));
            console.log('coustomerNumber');
            }
        
        },
         cookeisNumber : function()
    
         { 
             console.log('cokies')
         num=0;
            for(let i=0 ;i<this.saleTime.length;i++)
            { 
              
             this.cookies.push(Math.ceil(this.coustomerNumber[i]* this.avg) );
    
                num =num + this.cookies[i];
                console.log(this.cookies);
                
                
            }
                   
         },
         render: function() {
            const parentElement = document.getElementById('saleslist');
    
            const h2Element = document.createElement('h2');
            parentElement .appendChild(h2Element);
            h2Element.textContent = this.shopLocation;
        
        
        
            const ulElement = document.createElement('ul');
            parentElement.appendChild(ulElement);
            
            for(let i = 0; i < this.saleTime.length; i++) {
              let liElement = document.createElement('li');
              ulElement.appendChild(liElement);
              liElement.textContent = `${this.saleTime[i]}  ${this.cookies[i]} cookies`;
            
            }
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `Total : ${num}`;  
    
             }
    
    
        };
        Tokyo.randomCoustm();
        Tokyo.cookeisNumber();
        Tokyo.render();

  //-------------------------------------------------------------------


let Dubai= {
        shopLocation : 'Dubai',
          minNumber : 11,
         maxNumber : 38 ,
         avg :3.7,
         cookies:[],
         
         saleTime :['6am :','7am : ','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm','8pm'],
        coustomerNumber:[],
        
        randomCoustm:function(){
            for(let i=0 ;i<this.saleTime.length;i++)
            {
            this.coustomerNumber.push(generateRandomNumber(this.minNumber, this.maxNumber));
            console.log('coustomerNumber');
            }
        
        },
         cookeisNumber : function()
    
         { 
             console.log('cokies')
             num=0;
            for(let i=0 ;i<this.saleTime.length;i++)
            { 
             this.cookies.push(Math.ceil(this.coustomerNumber[i]* this.avg) );
    
                num =num + this.cookies[i];
                console.log(this.cookies);
                
                
            }
                   
         },
         render: function() {
            const parentElement = document.getElementById('saleslist');
    
            const h2Element = document.createElement('h2');
            parentElement .appendChild(h2Element);
            h2Element.textContent = this.shopLocation;
        
        
        
            const ulElement = document.createElement('ul');
            parentElement.appendChild(ulElement);
            
            for(let i = 0; i < this.saleTime.length; i++) {
              let liElement = document.createElement('li');
              ulElement.appendChild(liElement);
              liElement.textContent = `${this.saleTime[i]}  ${this.cookies[i]} cookies`;
            
            }
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `Total : ${num}`;  
    
             }
    
    
        };
        Dubai.randomCoustm();
        Dubai.cookeisNumber();
        Dubai.render();

        //---------------------------------------------------------------
        let Paris= {
            shopLocation : 'Paris',
              minNumber : 20,
             maxNumber : 38 ,
             avg :2.3,
             cookies:[],
             
             saleTime :['6am :','7am : ','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm','8pm'],
            coustomerNumber:[],
            
            randomCoustm:function(){
                for(let i=0 ;i<this.saleTime.length;i++)
                {
                this.coustomerNumber.push(generateRandomNumber(this.minNumber, this.maxNumber));
                console.log('coustomerNumber');
                }
            
            },
             cookeisNumber : function()
        
             { 
                 console.log('cokies')
                 num=0;
                for(let i=0 ;i<this.saleTime.length;i++)
                { 
                 this.cookies.push(Math.ceil(this.coustomerNumber[i]* this.avg) );
        
                    num =num + this.cookies[i];
                    console.log(this.cookies);
                    
                    
                }
                       
             },
             render: function() {
                const parentElement = document.getElementById('saleslist');
        
                const h2Element = document.createElement('h2');
                parentElement .appendChild(h2Element);
                h2Element.textContent = this.shopLocation;
            
            
            
                const ulElement = document.createElement('ul');
                parentElement.appendChild(ulElement);
                
                for(let i = 0; i < this.saleTime.length; i++) {
                  let liElement = document.createElement('li');
                  ulElement.appendChild(liElement);
                  liElement.textContent = `${this.saleTime[i]}  ${this.cookies[i]} cookies`;
                
                }
                let liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = `Total : ${num}`;  
        
                 }
        
        
            };
            Paris.randomCoustm();
            Paris.cookeisNumber();
            Paris.render();
//-------------------------------------------------

let Lima= {
    shopLocation : 'Lima',
      minNumber : 20,
     maxNumber : 38 ,
     avg :2.3,
     cookies:[],
     
     saleTime :['6am :','7am : ','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm','8pm'],
    coustomerNumber:[],
    
    randomCoustm:function(){
        for(let i=0 ;i<this.saleTime.length;i++)
        {
        this.coustomerNumber.push(generateRandomNumber(this.minNumber, this.maxNumber));
        console.log('coustomerNumber');
        }
    
    },
     cookeisNumber : function()

     { 
         console.log('cokies')
         num=0;
        for(let i=0 ;i<this.saleTime.length;i++)
        { 
         this.cookies.push(Math.ceil(this.coustomerNumber[i]* this.avg) );

            num =num + this.cookies[i];
            console.log(this.cookies);
            
            
        }
               
     },
     render: function() {
        const parentElement = document.getElementById('saleslist');

        const h2Element = document.createElement('h2');
        parentElement .appendChild(h2Element);
        h2Element.textContent = this.shopLocation;
    
    
    
        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);
        
        for(let i = 0; i < this.saleTime.length; i++) {
          let liElement = document.createElement('li');
          ulElement.appendChild(liElement);
          liElement.textContent = `${this.saleTime[i]}  ${this.cookies[i]} cookies`;
        
        }
        let liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `Total : ${num}`;  

         }


    };
    Lima.randomCoustm();
    Lima.cookeisNumber();
    Lima.render();
