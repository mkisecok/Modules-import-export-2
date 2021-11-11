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
 

 moduloForm.addEventListener('change', () => {
    moduloForm[2].value=modulo(moduloForm[0].value,moduloForm[1].value)
  
 });
 
//
 
