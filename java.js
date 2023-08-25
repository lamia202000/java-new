const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.addEventListener('click', function (event) {
        const div = event.currentTarget.children[2].children
        const list = div[0].innerText
        const li = document.createElement('li')
        li.innerText = list
        const money = parseFloat(div[1].innerText.split(' ')[0])
        document.getElementById('coupon-insert').appendChild(li)
        const total = parseFloat(document.getElementById('total').innerText) + money
        document.getElementById('total').innerText = parseFloat(document.getElementById('total').innerText) + money
        if (total >= 200) {
            document.getElementById('add-button').removeAttribute('disabled')
        }
        else {
            document.getElementById('add-button').setAttribute('disabled', true)
        }
        if (total > 0) {
            document.getElementById('parse-btn').removeAttribute('disabled')
        }
        else {
            document.getElementById('parse-btn').setAttribute('disabled', true)
        }
    })
}

document.getElementById('add-button').addEventListener('click',function(){
    const value=document.getElementById('input').value
    if(value=='SELL200'){
        const total= parseFloat(document.getElementById('total').innerText )
    const discount=total*0.2
    var total2 = total-discount
    document.getElementById('discount').innerText=total.toFixed(2)
    document.getElementById('total-2').innerText=total2.toFixed(2)}
    
})


document.getElementById('go-home').addEventListener('click',function(){

    window.location.reload()
})