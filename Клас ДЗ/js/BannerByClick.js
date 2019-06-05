class GetBannerByClick {
    constructor(links, pics) {
        this.bannerArr = []
        this.bannerArr.push(links)
        this.bannerArr.push(pics)
    }
    onClick() {
        const elIndex = Math.floor(Math.random() * this.bannerArr[0].length)
        this.aBannerTag.href = `${this.bannerArr[0][elIndex]}`
        this.imgBannerTag.src = `${this.bannerArr[1][elIndex]}`
    }
    render() {
        const mainDiv = document.createElement(`div`)

        const bannerDiv = document.createElement(`div`)
        let p = document.createElement(`p`)
        this.aBannerTag = document.createElement(`a`)
        this.imgBannerTag = document.createElement(`img`)
        this.aBannerTag.appendChild(this.imgBannerTag)
        p.appendChild(this.aBannerTag)
        bannerDiv.appendChild(p)

        const buttonDiv = document.createElement(`div`)
        let button = document.createElement(`button`)
        button.innerText = `Get banner!`
        button.onclick = this.onClick.bind(this)
        buttonDiv.appendChild(button)

        mainDiv.appendChild(bannerDiv)
        mainDiv.appendChild(buttonDiv)

        return mainDiv
    }
}