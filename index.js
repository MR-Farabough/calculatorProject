const resultEL = document.querySelector('.results-part')
const clearBTN = document.querySelector('.clearBTN')
const equalBTN = document.getElementById('equalBTN')
const multiplyBTN = document.querySelector('.multiplyBTN')
const divideBTN = document.querySelector('.divideBTN')
const minusBTN = document.querySelector('.minusBTN')
const plusBTN = document.querySelector('.plusBTN')
const delBTN = document.querySelector('.delBTN')
const negBTN = document.querySelector('.negativeBTN')
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
let posOrNeg = true
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
    if (decimalCheckArr.includes('.')) {
        return
    } else {
        resultEL.textContent += '.'
        return decimalCheckArr.push('.')
    }
}

function checkNaN(num) {
    if (numArr.includes(NaN)) {
        numArr = [num]
    } else {
        console.log('False')
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
function makeNegative() {
    let negNumArr = []
    let negNum = ''
    switch (posOrNeg) {
    case true:
        negNumArr = []
        negNum = ''
        for (let i = 0; i < resultEL.textContent.length;i++) {
            negNumArr.push(resultEL.textContent[i])
        }
        negNumArr.unshift('-')
        for (let index = 0; index < negNumArr.length; index++) {
            negNum += negNumArr[index]
        }
        resultEL.textContent = negNum
        posOrNeg = false
        break
    case false:
        negNumArr = []
        negNum = ''
        for (let i = 0; i < resultEL.textContent.length;i++) {
            negNumArr.push(resultEL.textContent[i])
        }
        negNumArr.shift()
        for (let index = 0; index < negNumArr.length; index++) {
            negNum += negNumArr[index]
        }
        resultEL.textContent = negNum
        posOrNeg = true
        break
    }
}
function checkLength() {
    if (resultEL.textContent.length > 15) {
        let prevNum = resultEL.textContent
        resultEL.textContent = 'number to large'
        setTimeout(() => {
            resultEL.textContent = prevNum
        }, 500);
    }
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

negBTN.addEventListener('click', () => {
    makeNegative()
    checkLength()
})

equalBTN.addEventListener('click', () => {
    console.log(opArr.length)
    equals()
    res = totalResult
    clear()
    resultEL.textContent = res
    console.log(opArr)
    decimalCheckArr = []
    checkLength()
})

plusBTN.addEventListener('click', () => {
    decimalCheckArr = []
    opArr.push('addition')
    opArrLength = opArr.length
    if (opArr.length === 1) {
        add()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'addition') {
        add()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'subtraction') {
        minus()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'multiplication') {
        multiply()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'divison') {
        divide()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'equals') {
        add()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else {

    }
    checkNaN(0)
    checkLength()
    console.log(numArr, opArr) 
})

minusBTN.addEventListener('click', () => {
    decimalCheckArr = []
    opArr.push('subtraction')
    opArrLength = opArr.length
    if (opArr.length === 1) {
        minus()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'addition') {
        add()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'subtraction') {
        minus()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'multiplication') {
        multiply()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'divison') {
        divide()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'equals') {
        minus()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else {

    }
    checkNaN(0)
    checkLength()
    console.log("🚀 ~ file: index.js:177 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
})

multiplyBTN.addEventListener('click', () => {
    decimalCheckArr = []
    opArr.push('multiplication')
    opArrLength = opArr.length
    if (opArr.length === 1) {
        numArr = [1]
        multiply()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'addition') {
        add()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'subtraction') {
        minus()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'multiplication') {
        multiply()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'divison') {
        divide()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else if (opArr[opArrLength - 2] === 'equals') {
        multiply()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
    } else {

    }
    checkNaN(1)
    checkLength()
    console.log("🚀 ~ file: index.js:177 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
})

divideBTN.addEventListener('click', () => {
   decimalCheckArr = []
   opArr.push('division')
   if (numArr)
   opArrLength = opArr.length
   if (opArr.length === 1) {
        numArr = [1]
        multiply()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
   } else if (opArr[opArrLength - 2] === 'addition') {
        add()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
   } else if (opArr[opArrLength - 2] === 'subtraction') {
       minus()
       console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
   } else if (opArr[opArrLength - 2] === 'multiplication') {
       multiply()
       console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
   } else if (opArr[opArrLength - 2] === 'divison') {
       divide()
       console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
   } else if (opArr[opArrLength - 2] === 'equals') {
        divide()
        console.log("plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
   } else {

   }
   checkLength()
   checkNaN(1)
   console.log("🚀 ~ file: index.js:177 ~ plusBTN.addEventListener ~ numArr, opArr:", numArr, opArr)
})

num0.addEventListener('click', () => {
    checkLength()
    if (resultEL.textContent === 'number to large') {
        return
    } else {
        return resultEL.textContent += 0
    }
})
num1.addEventListener('click', () => {
    checkLength()
    if (resultEL.textContent === 'number to large') {
        return
    } else {
        return resultEL.textContent += 1
    }
})
num2.addEventListener('click', () => {
    checkLength()
    if (resultEL.textContent === 'number to large') {
        return
    } else {
        return resultEL.textContent += 2
    }
})
num3.addEventListener('click', () => {
    checkLength()
    if (resultEL.textContent === 'number to large') {
        return
    } else {
        return resultEL.textContent += 3
    }
})
num4.addEventListener('click', () => {
    checkLength()
    if (resultEL.textContent === 'number to large') {
        return
    } else {
        return resultEL.textContent += 4
    }
})
num5.addEventListener('click', () => {
    checkLength()
    if (resultEL.textContent === 'number to large') {
        return
    } else {
        return resultEL.textContent += 5
    }
})
num6.addEventListener('click', () => {
    checkLength()
    if (resultEL.textContent === 'number to large') {
        return
    } else {
        return resultEL.textContent += 6
    }
})
num7.addEventListener('click', () => {
    checkLength()
    if (resultEL.textContent === 'number to large') {
        return
    } else {
        return resultEL.textContent += 7
    }
})
num8.addEventListener('click', () => {
    checkLength()
    if (resultEL.textContent === 'number to large') {
        return
    } else {
        return resultEL.textContent += 8
    }
})
num9.addEventListener('click', () => {
    checkLength()
    if (resultEL.textContent === 'number to large') {
        return
    } else {
        return resultEL.textContent += 9
    }
})
periodBTN.addEventListener('click', () => {
    checkLength()
    console.log(decimalCheckArr)
    checkDecimal()
})