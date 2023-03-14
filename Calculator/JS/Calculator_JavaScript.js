//creates an object to keep track of values
const Calculator = {
    //this is displays ) on the screen
    Display_Value: '0',
    //this will hold the first operand for any expressions, we set it to null for now
    First_Operand: null,
    //this checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    //this will hold the operator, we set it to null for now
    operator: null,
};

// this modifies values each time a button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calculator;
    //we are checking to see if wait second operand is true and set
    //display value to the key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //this overwrites display value if the current value is 0 otherwise adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit;
    }
}

//this section handles decimal points 
function Input_Decimal(dot) {
    //this ensures that accidental clicking of the decimal point
    //doesnt cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)){
        //we are saying that if the isplay value does not contain a decimal point we want to add a decimal point
        Calculator.Display_Value += dot;
    }
}

//this section handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator
    //when operator key pressed we convert the current number
    //displayed on screen to a number and store the result in 
    //calculator.First_Operand if it doesnt already exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if Wait_Second_Operand is true
    //then updates the operator and exits the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }

    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //checks if an operator exists
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is performed for the operator
        //n the perform calculation object and the function that matches the operator is performed
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        //here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        //this will remove any trailin 00's
        result = (result*1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//this function updates the screen wth the contents of the display_value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //the target variable is an object that represents the element that was clicked
    const {target} = event;
    //if the element that was clicked is not a buton exit function
    if (!target.matches('button')){
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator (target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal (target.value);
        Update_Display();
        return;
    }
    //ensures AC clears the numbers
    if (target.classList.contains('all-clear')) {
        Calculator_Reset ();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();

})
    
