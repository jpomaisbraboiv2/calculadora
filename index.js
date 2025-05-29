const result = document.getElementById("result")
const keys = document.querySelector(".keys")


const updateResult = (value) => {
    const operators = ['+', '*', '/', 'X', '-']
    const lastChar = result.value.slice(-1)

    if (value === 'CE') {
        result.value = '0'
        return
    }

    if (value === '=') {
        if (operators.includes(lastChar) || lastChar === '.') {
            return
        }
        result.value = eval(result.value.replace(/X/g, '*'))
        return
    }

    if (result.value === '0') {
        if (operators.includes(value) && value !== '-') {
            return
        }
        if (value === '-') {
            return result.value = '-'

        }
        if (value === '0') {
            return
        }
        result.value = ''
    }

    if (value === '.') {
        const parts = result.value.split(/[\+\-\*\/X]/)
        const currentNumber = parts[parts.length - 1]
        if (currentNumber.includes('.')) {
            return
        }
    }

    if (operators.includes(lastChar) && operators.includes(value)) {
        if (value === '-') {
            if (lastChar !== '-') {
                return result.value += value

            }
            return
        }

        return
    }

    result.value += value
}


keys.addEventListener('click', e => {
    const key = e.target.textContent
    if (e.target.matches('button')) {
        updateResult(key)
    }
})
