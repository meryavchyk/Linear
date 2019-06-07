// Задача 6. Створити клас TTime для роботи із часом у форматі “години:хвилини”. 
// Час представляється структурою із двома полями. Реалізувати методи збільшення/зменшення  
// часу на певну кількість годин чи хвилин.

class TTime {
    plus() {
        let inputMinSum = parseInt(this.inputPlusHour.value * 60)
        inputMinSum += parseInt(this.inputPlusMinuts.value)
        
        let hour = Math.floor(inputMinSum / 60)
        let min = inputMinSum % 60
        min += this.resM
        hour += min / 60
        this.resM = min % 60
        this.resH += Math.floor(hour)

        this.spanHour.innerText = `  ${this.resH}  `
        this.spanMinuts.innerText = `  ${this.resM}  `
    }
    minus() {
        let inputMinSum = parseInt(this.inputMinusHour.value * 60)
        inputMinSum += parseInt(this.inputMinusMinuts.value)
        
        let oldSum = this.resH * 60 + this.resM
        let resSum = oldSum - inputMinSum
        let hour = Math.floor(resSum / 60)
        let min = resSum % 60
        this.resM = min
        this.resH = Math.floor(hour)

        this.spanHour.innerText = `  ${this.resH}  `
        this.spanMinuts.innerText = `  ${this.resM}  `
    }
    render() {
        const mainDiv = document.createElement(`div`)
        const h1 = document.createElement(`h1`)
        const hr = document.createElement(`hr`)
        h1.innerText = `ЛІЧИЛЬНИК ЧАСУ`
        mainDiv.appendChild(h1)

        const divScreen = document.createElement(`div`)
        let p = document.createElement(`p`)
        let labelHour = document.createElement(`label`)
        labelHour.innerText = `годин  `
        this.spanHour = document.createElement(`span`)
        this.resH = 0
        this.spanHour.innerText = `  ${this.resH}  `
        const span2Points = document.createElement(`span`)
        span2Points.innerText = ` : `
        this.spanMinuts = document.createElement(`span`)
        this.resM = 0
        this.spanMinuts.innerText = `  ${this.resM}  `
        let labelMinuts = document.createElement(`label`)
        labelMinuts.innerText = `  хвилин`
        p.appendChild(labelHour)
        p.appendChild(this.spanHour)
        p.appendChild(span2Points)
        p.appendChild(this.spanMinuts)
        p.appendChild(labelMinuts)
        divScreen.appendChild(p)
        divScreen.appendChild(hr)
        mainDiv.appendChild(divScreen)

        const divToDo = document.createElement(`div`)
        const pPlus = document.createElement(`p`)
        const pMinus = document.createElement(`p`)

        const plusButton = document.createElement(`button`)
        plusButton.innerText = ` ДОДАТИ`
        plusButton.onclick = this.plus.bind(this)
        this.inputPlusHour = document.createElement(`input`)
        this.inputPlusHour.value = `0`
        const labelShrtHour1 = document.createElement(`label`)
        labelShrtHour1.innerText = ` год.`
        this.inputPlusMinuts = document.createElement(`input`)
        this.inputPlusMinuts.value = `0`
        const labelShrtMinuts1 = document.createElement(`label`)
        labelShrtMinuts1.innerText = ` хв.`
        pPlus.appendChild(plusButton)
        pPlus.appendChild(this.inputPlusHour)
        pPlus.appendChild(labelShrtHour1)
        pPlus.appendChild(this.inputPlusMinuts)
        pPlus.appendChild(labelShrtMinuts1)

        const minusButton = document.createElement(`button`)
        minusButton.innerText = `ВІДНЯТИ`
        minusButton.onclick = this.minus.bind(this)
        this.inputMinusHour = document.createElement(`input`)
        this.inputMinusHour.value = `0`
        const labelShrtHour2 = document.createElement(`label`)
        labelShrtHour2.innerText = ` год.`
        this.inputMinusMinuts = document.createElement(`input`)
        this.inputMinusMinuts.value = `0`
        const labelShrtMinuts2 = document.createElement(`label`)
        labelShrtMinuts2.innerText = ` хв.`
        pMinus.appendChild(minusButton)
        pMinus.appendChild(this.inputMinusHour)
        pMinus.appendChild(labelShrtHour2)
        pMinus.appendChild(this.inputMinusMinuts)
        pMinus.appendChild(labelShrtMinuts2)

        divToDo.appendChild(pPlus)
        divToDo.appendChild(pMinus)
        mainDiv.appendChild(divToDo)

        return mainDiv
    }
}