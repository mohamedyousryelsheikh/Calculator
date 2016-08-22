window.onload = function() {
var keys = document.querySelectorAll('#buttons button');
  var operators = ['+', '-', 'x', '÷'];
  var digit='';
  var oldDigit = '';
  
  var history;
  var  result = 0;
    var decimalAdded = false;     for(var i = 0; i < keys.length; i++) {
        keys[i].onclick = function(e) {
    
            // Get the input and button values
            var screen = document.querySelector('#answer');
            var history = document.querySelector('#history p');
            var input_val = history.innerHTML;
            var btnVal = this.innerHTML;
      
      if(btnVal=='C'){
                history.innerHTML="";
            }
      else if(btnVal=='+'){
            //+operand_1+=+inputVal;
            //operators[0];
            //inputVal="";
             
            if(digit == ''){
              console.log(oldDigit);
              result +=oldDigit;
            //oldDigit = digit;
            //digit='';
            }
            else{
                history.innerHTML += screen.innerHTML+btnVal;
                digit = parseInt(digit);
                oldDigit = digit;
                result +=digit;
                oldDigit = digit;
                console.log(oldDigit);
                digit='';
              }
            screen.innerHTML =result;
      }
      /*subtraction case*/
      else if(btnVal=='-'){
            //+operand_1+=+inputVal;
            //operators[0];
            //inputVal="";
             
            if(digit == ''){
              console.log(oldDigit);
              result = result - oldDigit;
            //oldDigit = digit;
            //digit='';
            }
            else{
                history.innerHTML += screen.innerHTML+btnVal;
                digit = parseInt(digit);
                result = parseInt(result);
                oldDigit = digit;
                result = result - digit;
                oldDigit = digit;
                console.log(oldDigit);
                digit='';
              }
            screen.innerHTML =result;
      }




            else if(btnVal=='='){
              screen.innerHTML =result;
              var lastChar = input_val.substr(input_val.length - 1);
              alert(lastChar);   
            } else{
      
      digit += this.innerHTML;
      screen.innerHTML =digit;
      //inputVal=history;
      //history.innerHTML += btnVal;
      
      }
      
      
      


        }

    }


    
  
}

