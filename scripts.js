pola = {}
pola = bingos['kubulek_v4']

if (localStorage.bingotype === undefined) {
    localStorage.bingotype = 'kubulek_v4'
    document.body.classList.add('body_kubulek')    
    pola = bingos['kubulek_v4']
    buttoncolor = 'body_kubulek'
    buttoncross = 'cross_kubulek'
    picturesrc = 'img/kubulek.jpg'
    document.getElementById('subheader').innerHTML = 'edycja kubańska, wersja 4'
    location.reload()
}

if (localStorage.bingotype == 'zozun') {
    document.body.classList.add('body_zozun')    
    buttoncolor = 'body_zozun'
    buttoncross = 'cross_zozun'
    document.getElementById('subheader').innerHTML = 'edycja zozuńska, wersja 1'
    picturesrc = 'img/zozun.jpg'
    pola = bingos[localStorage.bingotype]
}
if (localStorage.bingotype == 'kubulek_v4') {
    document.body.classList.add('body_kubulek')    
    buttoncolor = 'body_kubulek'
    buttoncross = 'cross_kubulek'
    document.getElementById('subheader').innerHTML = 'edycja kubańska, wersja 4'
    picturesrc = 'img/kubulek.jpg'
    pola = bingos[localStorage.bingotype]
}

bingonumbers = []

for (let i = 0; i < pola.length; i++) {
    if (pola[i] == "img") {
        var kubulek = document.createElement('img')
        //kubulek.width = "20%"
        kubulek.src = picturesrc
        kubulek.id = "kubulek"
        kubulek.classList.add('image')
        //kubulek.height= "20%"
        document.getElementById('mainbody').appendChild(kubulek)        
    } else {
        var bingo_button = document.createElement('button')
        bingo_button.id = (i + 1);
        bingo_button.classList.add(buttoncolor)
        bingo_button.onclick = function(){
            var pole = event.target
            if (pole.classList[1] != 'cross') {
                pole.classList.add('cross')
                pole.classList.add(buttoncross)
                bingonumbers[pole.id] = (Number(pole.id))
                localStorage.bingo = bingonumbers
                checkbingo()
            } else {
                pole.classList.remove('cross')
                pole.classList.remove(buttoncross)
                bingonumbers[pole.id] = ''
                localStorage.bingo = bingonumbers
                checkbingo()
            }
        }
        var buttontext = document.createTextNode(pola[i])
        bingo_button.appendChild(buttontext)
        document.getElementById('mainbody').appendChild(bingo_button)
    }
}

if (localStorage.bingo === undefined) {
    localStorage.bingo = ''
} else {
    var takelocalstorage = localStorage.bingo.split(',')
    for (let i = 0; i < takelocalstorage.length; i++) {
        if (takelocalstorage[i] != '') {
            var pole = document.getElementById(Number(takelocalstorage[i]))
            pole.classList.add('cross')
            pole.classList.add(buttoncross)
            bingonumbers[pole.id] = (Number(pole.id))
            checkbingo()
        }   
    }
}

function checkbingo() {
    if (bingonumbers.includes(1) && bingonumbers.includes(2) && bingonumbers.includes(3) && bingonumbers.includes(4) && bingonumbers.includes(5)) {addflash();return}
    if (bingonumbers.includes(11) && bingonumbers.includes(12) && bingonumbers.includes(14) && bingonumbers.includes(15)) {addflash();return}
    if (bingonumbers.includes(6) && bingonumbers.includes(7) && bingonumbers.includes(8) && bingonumbers.includes(9) && bingonumbers.includes(10)) {addflash();return}
    if (bingonumbers.includes(16) && bingonumbers.includes(17) && bingonumbers.includes(18) && bingonumbers.includes(19) && bingonumbers.includes(20)) {addflash();return}
    if (bingonumbers.includes(21) && bingonumbers.includes(22) && bingonumbers.includes(23) && bingonumbers.includes(24) && bingonumbers.includes(25)) {addflash();return}
    if (bingonumbers.includes(1) && bingonumbers.includes(6) && bingonumbers.includes(11) && bingonumbers.includes(16) && bingonumbers.includes(21)) {addflash();return}
    if (bingonumbers.includes(2) && bingonumbers.includes(7) && bingonumbers.includes(12) && bingonumbers.includes(17) && bingonumbers.includes(22)) {addflash();return}
    if (bingonumbers.includes(3) && bingonumbers.includes(8) && bingonumbers.includes(18) && bingonumbers.includes(23)) {addflash();return}
    if (bingonumbers.includes(4) && bingonumbers.includes(9) && bingonumbers.includes(14) && bingonumbers.includes(19) && bingonumbers.includes(24)) {addflash();return}
    if (bingonumbers.includes(5) && bingonumbers.includes(10) && bingonumbers.includes(15) && bingonumbers.includes(20) && bingonumbers.includes(25)) {addflash();return}
    if (bingonumbers.includes(1) && bingonumbers.includes(7) && bingonumbers.includes(19) && bingonumbers.includes(25)) {addflash();return}
    if (bingonumbers.includes(5) && bingonumbers.includes(9) && bingonumbers.includes(17) && bingonumbers.includes(21)) {addflash();return}
    document.body.classList.remove('flash')
}

function addflash() {
    document.body.classList.add('flash')
}

function reset() {
    localStorage.bingo = ''
    bingonumbers = []
    document.body.classList.remove('flash')
    location.reload()
}

document.getElementById('switch_kubulek').onclick = function(){
    localStorage.bingotype = 'kubulek_v4'
    reset()   
}
//window.onload = document.getElementById('myAudio').play()
document.getElementById('switch_zozun').onclick = () => {
    localStorage.bingotype = 'zozun'
    reset()   
}