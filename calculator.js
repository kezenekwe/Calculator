//get buttons
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

//defaults
let ans;

buttons.forEach(function(btn) {
    btn.addEventListener("click", function (e) {
        let classes = e.currentTarget.classList
        if (classes.contains("one")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + "1";
        }
        if (classes.contains("two")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + "2";
        }
        if (classes.contains("three")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + "3";
        }
        if (classes.contains("four")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + "4";
        }
        if (classes.contains("five")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + "5";
        }
        if (classes.contains("six")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + "6";
        }
        if (classes.contains("seven")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + "7";
        }
        if (classes.contains("eight")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + "8";
        }
        if (classes.contains("nine")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + "9";
        }
        if (classes.contains("zero")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + "0";
        }
        if (classes.contains("clear")) {
            display.innerHTML = "";
        }
        if (classes.contains("decimal")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + ".";
        }
        if (classes.contains("multiply")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + " * ";
        }
        if (classes.contains("divide")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + " / ";
        }
        if (classes.contains("subtract")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + " - ";
        }
        if (classes.contains("add")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + " + ";
        }
        if (classes.contains("equal")) {
            let inner = display.innerHTML;
            let evaluate = eval(inner);
            fixedEval = evaluate.toFixed(2);
            display.innerHTML = fixedEval;
            ans = evaluate;
        }
        if (classes.contains("answer")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + ans;
            if (ans === undefined) {
                display.innerHTML = inner + "invalid";
            }
        }
        if (classes.contains("delete")) {
            let inner = display.innerHTML;
            let modified = inner.slice(0, -1);
            display.innerHTML = modified;
            //you can also use split and pop.
        }
        if (classes.contains("negative")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + "-";
        }
        if (classes.contains("left-par")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + "(";
        }
        if (classes.contains("right-par")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + ")";
        }
        if (classes.contains("exponent")) {
            let inner = display.innerHTML;
            display.innerHTML = inner + " ** ";
        }
    })
});