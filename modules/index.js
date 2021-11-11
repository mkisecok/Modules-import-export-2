// Your code goes here!

import { fixRoundingErrors,calculateAspectRatio} from './aspect-ratio.js';

import {modulo,
    percentage,
    percentageOf,
    difference} from './percentage.js';





    
modulo();
percentage();
percentageOf();
difference();

calculateAspectRatio();
fixRoundingErrors();

 const moduloForm=document.querySelector('#modulo-form');

 const percentageForm=document.querySelector('#percentage-form');


 
// 1
 moduloForm.addEventListener('change', () => {
    moduloForm[2].value=modulo(moduloForm[0].value,moduloForm[1].value)
  
 });

 //2
 percentageForm.addEventListener('change', ()=>
 {
     percentageForm[2].value=percentage(percentageForm[0].value,percentageForm[1].value )
 })


 
//
 
