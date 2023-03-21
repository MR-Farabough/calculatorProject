const resultEL = document.querySelector('.results-part')
const clearBTN = document.querySelector('.clearBTN')
const equalBTN = document.querySelector('.equalBTN')
const multiplyBTN = document.querySelector('.multiplyBTN')
const divideBTN = document.querySelector('.divideBTN')
const minusBTN = document.querySelector('.minusBTN')
const plusBTN = document.querySelector('.plusBTN')
const delBTN = document.querySelector('.delBTN')
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
// Declare functions

function add() {
    opArrLength = opArr.length
    if (opArr[opArrLength - 1] === 'equals') {
        numArrLength = numArr.length
        resultEL.textContent = ''
        
        console.log(numArr)
    } else {
        numArr.push(parseFloat(resultEL.textContent))
        numArrLength = numArr.length
        numArr.push(numArr[numArrLength - 2] + numArr[numArrLength - 1])
        resultEL.textContent = ''
        console.log(numArr)
    }
}

function minus() {
    opArrLength = opArr.length
    if (opArr[opArrLength - 1] === 'equals') {
        numArrLength = numArr.length
        resultEL.textContent = ''
        
        console.log(numArr)
    } else {
        numArr.push(parseFloat(resultEL.textContent))
        numArrLength = numArr.length
        numArr.push(numArr[numArrLength - 2] - numArr[numArrLength - 1])
        resultEL.textContent = ''
        console.log(numArr)
    }
}

function multiply() {
    opArrLength = opArr.length
    if (opArr[opArrLength - 1] === 'equals') {
        numArrLength = numArr.length
        resultEL.textContent = ''
        console.log(numArr)
    } else if (opArrLength === 0) {
        numArr = [1]
        numArr.push(parseFloat(resultEL.textContent))
        numArrLength = numArr.length
        numArr.push(numArr[numArrLength - 2] * numArr[numArrLength - 1])
        resultEL.textContent = ''
        console.log(numArr)
    } else {
        numArr.push(parseFloat(resultEL.textContent))
        numArrLength = numArr.length
        numArr.push(numArr[numArrLength - 2] * numArr[numArrLength - 1])
        resultEL.textContent = ''
        console.log(numArr)
    }
}

function divide() {
    opArrLength = opArr.length
    if (opArr[opArrLength - 1] === 'equals') {
        numArrLength = numArr.length
        resultEL.textContent = ''
        console.log(numArr)
    } else if (opArrLength === 0) {
        numArr.push(parseFloat(resultEL.textContent))
        numArr.push(parseFloat(resultEL.textContent))
        numArrLength = numArr.length
        resultEL.textContent = ''
        console.log(numArr)
    } else {
        numArr.push(parseFloat(resultEL.textContent))
        numArrLength = numArr.length
        numArr.push(numArr[numArrLength - 2] / numArr[numArrLength - 1])
        resultEL.textContent = ''
        console.log(numArr)
    }
}

function checkDecimal() {
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
}

function equals() {
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
        totalResult = (numArr[numArrLength - 2] * numArr[numArrLength - 1])
        opArr.push('multiplication')
        numArr.push(totalResult)
        console.log(numArr)
        resultEL.textContent = totalResult
        opArr.push('equals')
    } else if (opArr[opArrLength - 1] === 'division') {
        totalResult = (numArr[numArrLength - 2] / numArr[numArrLength - 1])
        opArr.push('division')
        numArr.push(totalResult)
        console.log(numArr)
        resultEL.textContent = totalResult
        opArr.push('equals')
    } else {

    }
}
function clear() {
    resultEL.textContent = ''
    decimalCheckArr = []
    numArr = [0]
    totalResult = ''
    opArr = []
}
// Declare event listeners
clearBTN.addEventListener('click', () => {
    clear()
})

delBTN.addEventListener('click', () => {
    delArr = []
    delStr = ''
    for (let index = 0; index < resultEL.textContent.length; index++) {
        delArr.push(resultEL.textContent[index])
    }
    delArr.pop()
    for (let index = 0; index < delArr.length; index++) {
        delStr += delArr[index]
    }
    resultEL.textContent = delStr
})

equalBTN.addEventListener('click', () => {
    console.log(opArr.length)
    equals()
    rezz = totalResult
    clear()
    resultEL.textContent = rezz
    console.log(opArr)
    decimalCheckArr = []
})

plusBTN.addEventListener('click', () => {
    decimalCheckArr = []
    opArr.push('addition')
    opArrLength = opArr.length
    if (opArr.length === 1) {
        add()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'addition') {
        add()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'subtraction') {
        minus()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'multiplication') {
        multiply()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'divison') {
        divide()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'equals') {
        add()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else {

    }
    console.log(numArr, opArr) 
})

// while 

minusBTN.addEventListener('click', () => {
    decimalCheckArr = []
    opArr.push('subtraction')
    opArrLength = opArr.length
    if (opArr.length === 1) {
        minus()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'addition') {
        add()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'subtraction') {
        minus()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'multiplication') {
        multiply()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'divison') {
        divide()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'equals') {
        minus()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else {

    }
    console.log("🚀 ~ file: index.js:177 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
})

multiplyBTN.addEventListener('click', () => {
    decimalCheckArr = []
    opArr.push('multiplication')
    opArrLength = opArr.length
    if (opArr.length === 1) {
        numArr = [1]
        multiply()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'addition') {
        add()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'subtraction') {
        minus()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'multiplication') {
        multiply()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'divison') {
        divide()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'equals') {
        multiply()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else {

    }
    console.log("🚀 ~ file: index.js:177 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
})

divideBTN.addEventListener('click', () => {
   decimalCheckArr = []
   opArr.push('division')
   opArrLength = opArr.length
   if (opArr.length === 1) {
        divide()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
   } else if (opArr[opArrLength - 2] === 'addition') {
        add()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
   } else if (opArr[opArrLength - 2] === 'subtraction') {
       minus()
       console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
   } else if (opArr[opArrLength - 2] === 'multiplication') {
       multiply()
       console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
   } else if (opArr[opArrLength - 2] === 'divison') {
       divide()
       console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
   } else if (opArr[opArrLength - 2] === 'equals') {
        divide()
        console.log("🚀 ~ file: index.js:194 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
   } else {

   }
   console.log("🚀 ~ file: index.js:177 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
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
    checkDecimal()
})

// TODO make negtive numbers work
// TODO backspace button
// TODO number outside the
// TODO fix what would happen if any button is pressed twice or equal button before other numbers / buttons