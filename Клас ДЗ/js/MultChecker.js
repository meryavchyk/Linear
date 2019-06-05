class GetMultChecker {
    constructor() {
        this.rightAnswerCount = 0
        this.wrongAnswerCount = 0
    }
    onClick() {
        const firstNumber = parseInt(this.inputFirstNum.value)
        const secondNumber = parseInt(this.inputSecondNum.value)
        const multResult = parseInt(this.inputMult.value)
        if (firstNumber * secondNumber == multResult) {
            this.rightAnswerCount++
        }
        else
            this.wrongAnswerCount++
        this.rightAnswerSpan.innerText = `${this.inputFirstNum.value} * ${this.inputSecondNum.value} = ${this.inputFirstNum.value * this.inputSecondNum.value}`
        this.labelRightAnswer.innerText = `Count : Right [${this.rightAnswerCount}] | Wrong [${this.wrongAnswerCount}]`
    }
    render() {
        const mainDiv = document.createElement(`div`)

        const divFirstNum = document.createElement(`div`)
        let label = document.createElement(`label`)
        label.innerText = `First number : `
        this.inputFirstNum = document.createElement(`input`)
        this.inputFirstNum.value = `0`
        label.appendChild(this.inputFirstNum)
        divFirstNum.appendChild(label)

        const divSecondNum = document.createElement(`div`)
        label = document.createElement(`label`)
        label.innerText = `Second number : `
        this.inputSecondNum = document.createElement(`input`)
        this.inputSecondNum.value = `0`
        label.appendChild(this.inputSecondNum)
        divSecondNum.appendChild(label)

        const divMult = document.createElement(`div`)
        label = document.createElement(`label`)
        label.innerText = `Multiplication : `
        this.inputMult = document.createElement(`input`)
        this.inputMult.value = `0`
        label.appendChild(this.inputMult)
        divMult.appendChild(label)

        let button = document.createElement(`button`)
        button.innerText = `Check result!`
        button.onclick = this.onClick.bind(this)

        const divRightAnsw = document.createElement(`div`)
        divRightAnsw.innerText = `Right answer : `
        this.rightAnswerSpan = document.createElement(`span`)
        divRightAnsw.appendChild(this.rightAnswerSpan)

        const divCount = document.createElement(`div`)
        this.labelRightAnswer = document.createElement(`label`)
        divCount.appendChild(this.labelRightAnswer)

        mainDiv.appendChild(divFirstNum)
        mainDiv.appendChild(divSecondNum)
        mainDiv.appendChild(divMult)
        mainDiv.appendChild(button)
        mainDiv.appendChild(divRightAnsw)
        mainDiv.appendChild(divCount)

        return mainDiv
    }
}