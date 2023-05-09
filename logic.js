let screen= document.getElementById("screen"); 
// tooked the screen from input tag of html
buttons = document.querySelectorAll('button');
// took button from html like above
 let screenValue= '';
// now the screen value(no. in screen) is blank
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
/*venlisterner.... is used to take perticular no. which is clicked and kept in
(e), e.target is clicked button, innerText gives me text form of tergeted button
and saved in buttonText   */
       // document.write('buttonText is ', buttonText); 
// this step help to see clicked button in screen
        if(buttonText=='X'){
           buttonText='*';
// changing function of * to x
           screenValue += buttonText;
           screen.value = screenValue;
/* this function helps to display clicked button on screen, += is used to use
many time as i want*/ 

    }
        else if (buttonText=='Ac'){
            screenValue = "";
           screen.value = screenValue;
// same as above but Ac helps to clear all no of screen,"" is used to clear all 

    }
    else if(buttonText=='÷'){
        buttonText = '/';
        screenValue+=buttonText;
        screen.value=screenValue;
    }
         else if (buttonText=='='){
         screen.value=eval(screenValue);
/* screen.value is value in screen but screenValuse is variable, eval is used
to evaluate the expression.  */
        }
        else if(buttonText=='⬅'){
            screenValue = screen.value.slice(0,-1);
            screen.value = screenValue;
/* .slice(0,-1) is used to delete one number.here,0 is for stsrting no. and -1 
is for ending no. and if i want to delete ending no. i can delete with help
of -1 which delete lst input no.*/ 
        }
        else if(buttonText=='π'){
            buttonText=3.14;
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
// this function is used for others no. and symbol
        }

    })
}

