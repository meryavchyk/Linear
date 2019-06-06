// Задача 1. Створити клас, що представляє прямокутник і має методи для знаходження площі, 
// периметру та масштабування.

class Rectangle {
    constructor(a, b) {
        this.aSide = a
        this.bSide = b
    }
    getSquare() {
        let sqr = this.aSide * this.bSide
        this.spanSqr.innerText = ` [${sqr}]см.`
    }
    getPerimeter() {
        let perimeter = (this.aSide * 2) + (this.bSide * 2)
        this.spanPerim.innerText = ` [${perimeter}]см.`
    }
    getScale() {
        this.aSide += parseInt(this.inputScale.value)
        this.bSide += parseInt(this.inputScale.value)
        this.spanA.innerText = `сторона "А" = [${this.aSide}]см. |`
        this.spanB.innerText = ` сторона "B" = [${this.bSide}]см.`
    }
    render() {
        const mainDiv = document.createElement(`div`)
        const hr = document.createElement(`hr`)
        const br = document.createElement(`br`)
        const h1 = document.createElement(`h1`)
        h1.innerText = `ПРЯМОКУТНИК`
        this.spanA = document.createElement(`span`)
        this.spanA.innerText = `сторона "А" = [${this.aSide}]см. |`
        this.spanB = document.createElement(`span`)
        this.spanB.innerText = ` сторона "B" = [${this.bSide}]см.`
        const buttonPerim = document.createElement(`button`)
        buttonPerim.innerText = `ПЕРИМЕТЕР`
        buttonPerim.onclick = this.getPerimeter.bind(this)
        this.spanPerim = document.createElement(`span`)

        const buttonSqr = document.createElement(`button`)
        buttonSqr.innerText = `ПЛОЩА`
        buttonSqr.onclick = this.getSquare.bind(this)
        this.spanSqr = document.createElement(`span`)

        const buttonScale = document.createElement(`button`)
        buttonScale.innerText = `МАСШТАБУВАТИ на  `
        buttonScale.onclick = this.getScale.bind(this)
        this.inputScale = document.createElement(`input`)
        this.inputScale.value = `0`
        const labelScale = document.createElement(`label`)
        labelScale.innerText = ` см.`

        mainDiv.appendChild(h1)
        mainDiv.appendChild(this.spanA)
        mainDiv.appendChild(this.spanB)
        mainDiv.appendChild(hr)
        mainDiv.appendChild(buttonPerim)
        mainDiv.appendChild(this.spanPerim)
        mainDiv.appendChild(br)
        mainDiv.appendChild(buttonSqr)
        mainDiv.appendChild(this.spanSqr)
        mainDiv.appendChild(br)
        mainDiv.appendChild(buttonScale)
        mainDiv.appendChild(this.inputScale)
        mainDiv.appendChild(labelScale)

        return mainDiv
    }
}