let a = parseInt(prompt("Введіть число А:", ""))
let b = parseInt(prompt("Введіть число Б (!НЕ МЕНШЕ НІЖ ПОПЕРЕДНЄ ЧИСЛО!:):", ""))

let sum = a + b;
document.write(`<table><tr><th>Cума(a+b)</th><th>Добуток(a*b)</th><th>Ділення(a/b)</th></tr><tr><td>` + sum, `</td>`)

let product = a * b;
document.write(`<td>` + product, `</td>`)


let div = a / b;
document.write(`<td>` + div, `</td></tr><tr id="given"><td colspan="3"><div> Число "а" = ` + a, `</div><div>Число "b" = ` + b, `</div></td></table>`)