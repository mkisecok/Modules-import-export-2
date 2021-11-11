// Your code goes here!

import {calculateAspectRatio} from './aspect-ratio.js';

import {modulo,
    percentage,
    percentageOf,
    difference} from './percentage.js';





    
modulo();
percentage();
percentageOf();
difference();

calculateAspectRatio();


 const moduloForm=document.querySelector('#modulo-form');

 const percentageForm=document.querySelector('#percentage-form');

 const percentageOfForm=document.querySelector('#percentageOf-form');

const differenceForm=document.querySelector('#difference-form');
 
// 1
 moduloForm.addEventListener('change', () => {
    moduloForm[2].value=modulo(moduloForm[0].value,moduloForm[1].value)
  
 });

 //2
 percentageForm.addEventListener('change', ()=>
 {
     percentageForm[2].value=percentage(percentageForm[0].value,percentageForm[1].value )
 });

//3

percentageOfForm.addEventListener('change' , ()=>
{
    
    percentageOfForm[2].value=percentageOf( percentageOfForm[0].value, percentageOfForm[1].value )
});

//4

differenceForm.addEventListener('change', ()=>
{
    differenceForm[2].value = difference(differenceForm[0].value, differenceForm[1].value)
})

 
