window.onload = function() {

var operators = ['+', '-', 'x', '÷'];
  var digit=0;
  var oldDigit = 0;
  
  var history;
  var result = 0;

 var screen='' ;

  document.getElementById("buttons").addEventListener("click",function(e) {  
   //alert(e.target.value);
 
  screen = screen +e.target.value;
   document.getElementById("answer").innerHTML = screen;
   document.getElementById("history-log").innerHTML =history = screen;
   
   //console.log(history);
  //  var input_val = history.innerHTML;
  //  var btnVal = this.innerHTML;
  switch(e.target.value){

      case '+':
      //alert('addition');
      //alert(digit);

      result = Number(result) + Number(digit);
      digit = '';
      screen = result;
      break;

      default:
      //alert('default');
       //digit = screen;
      break;  

      }

  });
}

