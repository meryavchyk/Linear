// Задача 4. База даних співробітників фірми містить наступні дані: 
// паспортні дані, освіта, спеціальність, посада, оклад. Створити програму для пошуку усіх працівників :
// 1)з вищою освітою;
// 2) усіх інженерів;
// 3) усіх, у кого оклад є більшим за 10000. 


class Staff {
    constructor(staff) {
        this.staff = staff
    }
    getAllStaffList() {
        let p = document.createElement(`p`)
        let h3 = document.createElement(`h3`)
        h3.innerText = `ПОВНИЙ СПИСОК ПРАЦІВНИКІВ ПІДПРИЄМСТВА`
        let ol = document.createElement(`ol`)
        for (const element of this.staff) {
            let li = document.createElement(`li`)
            li.innerText = `Ім'я: ${element.name} | Паспорт ${element.pasp} | Освіта: ${element.educ} | Професія: ${element.proff} | Посада: ${element.post} | Оклад: ${element.salary}`
            ol.appendChild(li)
        }
        p.appendChild(h3)
        p.appendChild(ol)
        this.resDiv.appendChild(p)
    }
    getAllEngineerList() {
        let p = document.createElement(`p`)
        let h3 = document.createElement(`h3`)
        h3.innerText = `СПИСОК ПРАЦІВНИКІВ ПІДПРИЄМСТВА - Інженерів`
        let ol = document.createElement(`ol`)
        for (const element of this.staff) {
            if (element.proff == `Інженер`) {
                let li = document.createElement(`li`)
                li.innerText = `Ім'я: ${element.name} | Професія: ${element.proff} | Освіта: ${element.educ} |  Посада: ${element.post} `
                ol.appendChild(li)
            }
        }
        p.appendChild(h3)
        p.appendChild(ol)
        this.resDiv.appendChild(p)
    }
    getAllHighAducDegreeList() {
        let p = document.createElement(`p`)
        let h3 = document.createElement(`h3`)
        h3.innerText = `СПИСОК ПРАЦІВНИКІВ ПІДПРИЄМСТВА - З вищою освітою`
        let ol = document.createElement(`ol`)
        for (const element of this.staff) {
            let li = document.createElement(`li`)
            if (element.educ == `Вища`) {
                li.innerText = `Ім'я: ${element.name} | Професія: ${element.proff} | Освіта: ${element.educ} |  Посада: ${element.post} `
                ol.appendChild(li)
            }
        }
        p.appendChild(h3)
        p.appendChild(ol)
        this.resDiv.appendChild(p)
    }
    getMoreThanPayment10KList() {
        let p = document.createElement(`p`)
        let h3 = document.createElement(`h3`)
        h3.innerText = `СПИСОК ПРАЦІВНИКІВ ПІДПРИЄМСТВА - З окладом більше 10,000 грн.`
        let ol = document.createElement(`ol`)
        for (const element of this.staff) {
            let li = document.createElement(`li`)
            if (element.salary > 10000) {
                li.innerText = `Ім'я: ${element.name} | Оклад: ${element.salary} | Освіта: ${element.educ} | Посада: ${element.post} `
                ol.appendChild(li)
            }
        }
        p.appendChild(h3)
        p.appendChild(ol)
        this.resDiv.appendChild(p)
        // ====================================
        this.h3.innerText = `СПИСОК ПРАЦІВНИКІВ ПІДПРИЄМСТВА - З окладом більше 10,000 грн.`
        for (const element of this.staff) {
            let li = document.createElement(`li`)
            if (element.salary > 10000) {
                li.innerText = `Ім'я: ${element.name} | Оклад: ${element.salary} | Освіта: ${element.educ} | Посада: ${element.post} `
                this.olTagRes.appendChild(li)
            }
        }
    }
    render() {
        const mainDiv = document.createElement(`div`)

        let h1 = document.createElement(`h1`)
        h1.innerText = `СПИСОК ПРАЦІВНИКІВ`
        mainDiv.appendChild(h1)
        let buttonAll = document.createElement(`button`)
        buttonAll.innerText = `Повний список`
        buttonAll.onclick = this.getAllStaffList.bind(this)
        let buttonHigh = document.createElement(`button`)
        buttonHigh.innerText = `Працівники з вищ.освітою`
        buttonHigh.onclick = this.getAllHighAducDegreeList.bind(this)
        let button10K = document.createElement(`button`)
        button10K.innerText = `З окладом > 10,000`
        button10K.onclick = this.getMoreThanPayment10KList.bind(this)
        let buttonEng = document.createElement(`button`)
        buttonEng.innerText = `Інженери`
        buttonEng.onclick = this.getAllEngineerList.bind(this)
        let hr = document.createElement(`hr`)
        this.resDiv = document.createElement(`div`)
        // this.h3 = document.createElement(`h3`)
        // this.olTagRes = document.createElement(`ol`)
        mainDiv.appendChild(buttonAll)
        mainDiv.appendChild(buttonHigh)
        mainDiv.appendChild(buttonEng)
        mainDiv.appendChild(button10K)
        mainDiv.appendChild(hr)
        mainDiv.appendChild(this.resDiv)


        // mainDiv.appendChild(this.h3)
        // mainDiv.appendChild(this.olTagRes)

        return mainDiv
    }
}