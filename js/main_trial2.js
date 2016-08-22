window.onload = function() {
    var operators = ['+', '-', 'x','÷']
    var buttons = document.getElementsByTagName('span');
    var result = document.querySelectorAll('.result p')[0];
    var clear = document.getElementsByClassName('clear')[0];
    var maxChar = 34;
    var exceededMax = false;
    var calculated = false;
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === '=') {
            buttons[i].addEventListener("click", calculate(i));
        } else {
            buttons[i].addEventListener("click", addValue(i));
        }
    }
    clear.onclick = function() {
        result.innerHTML = '';
    };

    function addValue(i) {
        return function() {
            var lastChar = result.innerHTML.substr(result.innerHTML.length - 1);
            var lastIsOpertor = false;
            var isOperator = operators.indexOf(buttons[i].innerHTML);
            if (result.innerHTML.length > maxChar) exceededMax = true;
            for (var y = 0; y < operators.length; y++) {
                if (buttons[i].innerHTML === operators[y]) {
                    if (lastChar === operators[y]) lastIsOpertor = true;
                    else lastIsOpertor = false;
                }
            }
            if (!lastIsOpertor && !calculated) {
				
                if (buttons[i].innerHTML === '÷') {
					console.log(buttons[i].innerHTML);
                    result.innerHTML += '/';
                } else if (buttons[i].innerHTML === 'x') {
                    result.innerHTML += '*';
                } else {
                    result.innerHTML += buttons[i].innerHTML;
                }
				
            } else {
                if (calculated && isOperator > -1) {
					
                    if (buttons[i].innerHTML === '÷') {
                        result.innerHTML += '/';
                    } else if (buttons[i].innerHTML === 'x') {
                        result.innerHTML += '*';
                    } else {
                        result.innerHTML += buttons[i].innerHTML;
                    }
                    calculated = false;
                } else if (calculated) {
                    result.innerHTML = '';
                    result.innerHTML += buttons[i].innerHTML;
                    calculated = false;
                } else {
                    result.innerHTML += buttons[i].innerHTML;
                    result.innerHTML = result.innerHTML.slice(0, -1);
                }
            }
            if (exceededMax) {
                alert('you have reached the maximum characters');
            }
        };
    }

    function calculate() {
        return function() {
            result.innerHTML = eval(result.innerHTML);
            calculated = true;
        };
    }
};