
           screen=document.querySelector('.mobile-inner-downscreen');
            phonenumber=screen.querySelector('.telNumber');
            
  function myFunction(element) {
           childrens = screen.querySelectorAll('.icons');
        for(let i=0;i<childrens.length;i++)
        {
          childrens[i].style.visibility='hidden';
        }
            children = element.querySelector('.number'); 
             phonenumber.style.visibility='visible'; 
          phonenumber.value=phonenumber.value+children.innerHTML;
        phonenumber.style.margin='-120% auto';
        
      }  
       function callFunction(element)  {
       callLink=	screen.querySelector('.callLink');
       callLink.style.visibility='visible';
       phonenumber.style.visibility='hidden';
         
        }
      

       
       function callOffFunction(element)  {
       	
          
        
           childrens = screen.querySelectorAll('.icons');
        for(let i=0;i<childrens.length;i++)
        {
          childrens[i].style.visibility='visible';
        }
        callLink.style.visibility='hidden';
        phonenumber.style.visibility='hidden';
        phonenumber.value='';
       }
       
       if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}




       

