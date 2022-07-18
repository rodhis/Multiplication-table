function tabuada() {
let num = window.document.getElementById('numtxt')
let sel = window.document.getElementById('seltab')
if (num.value.length == 0) {
    window.alert('Insira um número válido')
} else {
    let n = Number(num.value)
    sel.innerHTML = ''
    for (let t = 1 ; t <= 10 ; t++) {
        let item = document.createElement('option')
        item.text = `${n} x ${t} = ${n*t}`
        item.value = `tab${t}`
        sel.appendChild(item)
    }
}
}