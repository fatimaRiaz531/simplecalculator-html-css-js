let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            // Replace 'x' with '*' for multiplication
            string = string.replace(/x/g, '*'); // This line replaces 'x' with '*'
            try {
                string = eval(string); // Evaluate the expression
            } catch {
                string = "Error"; // Handle any errors in evaluation
            }
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
