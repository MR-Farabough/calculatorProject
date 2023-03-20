const resultEL = document.querySelector('.results-part')
const clearBTN = document.querySelector('.clearBTN')
const equalBTN = document.querySelector('.equalBTN')
const multiplyBTN = document.querySelector('.multiplyBTN')
const divideBTN = document.querySelector('.divideBTN')
const minusBTN = document.querySelector('.minusBTN')
const plusBTN = document.querySelector('.plusBTN')
const num7 = document.querySelector('.seven')
const num8 = document.querySelector('.eight')
const num9 = document.querySelector('.nine')
const num4 = document.querySelector('.four')
const num5 = document.querySelector('.five')
const num6 = document.querySelector('.six')
const num1 = document.querySelector('.one')
const num2 = document.querySelector('.two')
const num3 = document.querySelector('.three')
const num0 = document.querySelector('.zero')
const periodBTN = document.querySelector('.periodBTN')
let decimalCheckArr = [];
let numArr = [0];
let opArr = [];
let totalResult = '';

clearBTN.addEventListener('click', () => {
    resultEL.textContent = ''
    decimalCheckArr = []
    numArr = [0]
    totalResult = ''
    opArr = []
})

equalBTN.addEventListener('click', () => {
    numArr.push(parseFloat(resultEL.textContent))
    console.log(numArr)
    opArrLength = opArr.length
    numArrLength = numArr.length
    if (opArr[opArrLength - 1] === 'addition') {
        totalResult = (numArr[numArrLength - 2] + numArr[numArrLength - 1])
        opArr.push('addition')
        numArr.push(totalResult)
        console.log(numArr)
        resultEL.textContent = totalResult
        opArr.push('equals')
    } else if (opArr[opArrLength - 1] === 'subtraction') {
        totalResult = (numArr[numArrLength - 2] - numArr[numArrLength - 1])
        opArr.push('subtraction')
        numArr.push(totalResult)
        console.log(numArr)
        resultEL.textContent = totalResult
        opArr.push('equals')
    } else if (opArr[opArrLength - 1] === 'multiplication') {
        // multiply the last two numbers in numArr
    } else {
        // divide the second to lsat number by last number in numArr
    }
})

plusBTN.addEventListener('click', () => {
    opArrLength = opArr.length
    if (opArr[opArrLength - 1] === 'equals') {
        numArrLength = numArr.length
        resultEL.textContent = ''
        opArr.push('addition')
        console.log(numArr)
    } else if (opArrLength === 0) {
        numArr.push(parseFloat(resultEL.textContent))
        numArrLength = numArr.length
        numArr.push(numArr[numArrLength - 2] + numArr[numArrLength - 1])
        resultEL.textContent = ''
        opArr.push('addition')
        console.log(numArr)
    } else {
        numArr.push(parseFloat(resultEL.textContent))
        numArrLength = numArr.length
        numArr.push(numArr[numArrLength - 2] + numArr[numArrLength - 1])
        resultEL.textContent = ''
        opArr.push('addition')
        console.log(numArr)
    }
})

minusBTN.addEventListener('click', () => {
    opArrLength = opArr.length
    if (opArr[opArrLength - 1] === 'equals') {
        numArrLength = numArr.length
        resultEL.textContent = ''
        opArr.push('subtraction')
        console.log(numArr)
    } else if (opArrLength === 0) {
        numArr.push(parseFloat(resultEL.textContent))
        numArrLength = numArr.length
        numArr.push(numArr[numArrLength - 2] - numArr[numArrLength - 1])
        resultEL.textContent = ''
        opArr.push('subtraction')
        console.log(numArr)
    } else {
        numArr.push(parseFloat(resultEL.textContent))
        numArrLength = numArr.length
        numArr.push(numArr[numArrLength - 2] - numArr[numArrLength - 1])
        resultEL.textContent = ''
        opArr.push('subtraction')
        console.log(numArr)
    }
})

multiplyBTN.addEventListener('click', () => {
    numArr.push(parseFloat(resultEL.textContent))
    resultEL.textContent = ''
    opArr.push('multiplication')
})

divideBTN.addEventListener('click', () => {
    numArr.push(parseFloat(resultEL.textContent))
    resultEL.textContent = ''
    opArr.push('divide')
})

num0.addEventListener('click', () => {
    resultEL.textContent += 0
})
num1.addEventListener('click', () => {
    resultEL.textContent += 1
})
num2.addEventListener('click', () => {
    resultEL.textContent += 2
})
num3.addEventListener('click', () => {
    resultEL.textContent += 3
})
num4.addEventListener('click', () => {
    resultEL.textContent += 4
})
num5.addEventListener('click', () => {
    resultEL.textContent += 5
})
num6.addEventListener('click', () => {
    resultEL.textContent += 6
})
num7.addEventListener('click', () => {
    resultEL.textContent += 7
})
num8.addEventListener('click', () => {
    resultEL.textContent += 8
})
num9.addEventListener('click', () => {
    resultEL.textContent += 9
})
periodBTN.addEventListener('click', () => {
    console.log(decimalCheckArr)
    for (let i = 0; i < resultEL.textContent.length; i++) {
        if (decimalCheckArr[i] === '.') {
            break
        } else {
            resultEL.textContent += '.'
            return decimalCheckArr.push('.')
        }
    }
    for (let index = 0; index < resultEL.textContent.length; index++) {
        if (decimalCheckArr[index] === '.') {
            break
        } else {
            return decimalCheckArr.push(resultEL.textContent[index])
        }
        
    }
})