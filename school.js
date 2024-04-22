let btns = document.querySelector('#btn');
   btns.addEventListener('click', learn);

   function learn(){
     let link = prompt('enter link');
       btns.textContent('this is'+ link);
       document.write(btns);
         

 }