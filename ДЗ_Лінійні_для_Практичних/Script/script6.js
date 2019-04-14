let prdct1Count = parseFloat(prompt(`Введіть кількість Товару-1:`, ''))
let prdct1Price = parseFloat(prompt(`Введіть ціну за одиницю Товару-1:`, ''))
let prdct2Count = parseFloat(prompt(`Введіть кількість Товару-2:`, ''))
let prdct2Price = parseFloat(prompt(`Введіть ціну за одиницю Товару-2:`, ''))
let prdct3Count = parseFloat(prompt(`Введіть кількість Товару-3:`, ''))
let prdct3Price = parseFloat(prompt(`Введіть ціну за одиницю Товару-3:`, ''))

document.write(`<table><tr><td><h2>Назва</h2></td><td><h2>Кіл-ть</h2></td><td><h2>Ціна за од.</h2></td><td><h2>Заг. варт.</h2></td></tr><tr><td><h3>Товар-1</h3></td><td>`)


let prdct1Total = prdct1Count * prdct1Price
document.write(prdct1Count + '</td><td>', +prdct1Price + `</td><td>`, +prdct1Total + `</td></tr><tr><td><h3>Товар-2</h3></td><td>`)

let prdct2Total = prdct2Count * prdct2Price
document.write(prdct2Count + '</td><td>', +prdct2Price + `</td><td>`, +prdct2Total + `</td></tr><tr><td><h3>Товар-3</h3></td><td>`)

let prdct3Total = prdct3Count * prdct3Price
document.write(prdct3Count + '</td><td>', +prdct3Price + `</td><td>`, +prdct3Total + `</td></tr><tr><td colspan="3"><h3>Загальна сумма</h3></td><td>`)

let prdctsTotal = prdct1Total + prdct2Total + prdct3Total
document.write(prdctsTotal + `</td></tr></table>`)