const result = document.getElementById("result")
const keys = document.querySelector(".keys")


const updateResult = (value) => {
    const operators = ['+', '-', '*', '/', '.', 'X']

    if (value === 'CE') {
        return result.value = '0'
    }

    if (value === '=') {
        return result.value = eval(result.value.replace(/X/g, '*'))
    }

    if (result.value === '0' && value !== '0' && !operators.includes(value)) {
        result.value = ''
    }

    const lastChar = result.value.slice(-1);

    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    if (value === '.') {
        const parts = result.value.split(/[\+\-\*\/X]/);
        const currentNumber = parts[parts.length - 1];

        if (currentNumber.includes('.')) {
            return
        }
    }

    return result.value += value
}

keys.addEventListener('click', e => {
    const key = e.target.textContent
    if (e.target.matches('button')) {
        updateResult(key)
    }
})
