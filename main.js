const display = document.getElementById("display");
const keys = document.getElementById("keys");

keys.addEventListener("click", e => {
    if (!e.target.matches("button")) return;
    const key = e.target.dataset.key;

    if (key) {
        display.value += key;
        setCursorToEnd();
        return;
    }

    switch (e.target.id) {
        case "clear":
            display.value = "";
            setCursorToEnd();
            break;
        case "backspace":
            display.value = display.value.slice(0, -1);
            setCursorToEnd();
            break;
        case "pow":
            display.value += "**";
            setCursorToEnd();
            break;
        case "sqrt":
            calculateSqrt();
            setCursorToEnd();
            break;
        case "equal":
            calculate();
            setCursorToEnd();
            break;
    }
});

function calculate() {
    try {
        const result = Function('"use strict";return (' + display.value + ')')();
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function calculateSqrt() {
    try {
        const val = parseFloat(display.value);
        if (isNaN(val)) {
            display.value = "Error";
            return;
        }
        display.value = Math.sqrt(val);
    } catch {
        display.value = "Error";
    }
}

function setCursorToEnd() {
    display.setSelectionRange(display.value.length, display.value.length);
    display.focus();
}



// Author: Franciszek Karbowniczek (aka Xmind 404)