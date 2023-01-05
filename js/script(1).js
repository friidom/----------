let swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 250,
    clickable: true,
});
let range_children = document.querySelector('.range_children')
setTimeout(() => {
    range_children.classList.add('vernis')
}, 0)
let i = 0
let js = document.querySelector('.js')
setInterval(() => {
    i += 380
    if (i > 400000) {
        i = 400000
    }
    js.innerHTML = `${i}` + '₽'
}, 0)

let i1 = 0
let js1 = document.querySelector('.js1')
setInterval(() => {
    i1 += 2
    if (i1 > 200) {
        i1 = 200
    }
    js1.innerHTML = `${i1}`
}, 55)
let i2 = 0
let js2 = document.querySelector('.js2')
setInterval(() => {
    i2 += 2
    if (i2 > 190) {
        i2 = 190
    }
    js2.innerHTML = `${i2}`
}, 60)
//₽
//ХРОНОС
let i_secund = 18
let i_minut = 18
let i_chasov = 18
let i_dney = 18
let dney = document.querySelector('.dney')
let chasov = document.querySelector('.chasov')
let minut = document.querySelector('.minut')
let secund = document.querySelector('.secund')
secund.innerHTML = `${i_secund}`
minut.innerHTML = `${i_minut}`
chasov.innerHTML = `${i_chasov}`
dney.innerHTML = `${i_dney}`
let for1;
setInterval(() => {
    i_secund = i_secund - 1
    if (i_secund < 1) {
        i_secund = 60
        i_minut = i_minut - 1
        if (i_minut < 1) {
            i_minut = 60
            i_chasov = i_chasov - 1
            if (i_chasov < 0) {
                i_chasov = 24
                i_dney = i_dney - 1
                if (i_dney < 0) {
                    i_dney = 0
                    i_chasov = 0
                    i_secund = 0
                    i_minut = 0
                    dney.innerHTML = '0' + `${i_dney}`
                    chasov.innerHTML = '0' + `${i_chasov}`
                    minut.innerHTML = '0' + `${i_minut}`
                    secund.innerHTML = '0' `${i_secund}`
                }
                dney.innerHTML = `${i_dney}`
            }
            chasov.innerHTML = `${i_chasov}`
        }
        minut.innerHTML = `${i_minut}`
    }
    secund.innerHTML = `${i_secund}`
}, 1000)
//Включение света
let gradient_border_and_img = document.querySelector('.gradient_border_and_img')
let black_block = document.querySelector('.black_block')
let img = document.querySelector('.img')
setTimeout(() => {
    gradient_border_and_img.classList.add('gradient_border_and_img_js')
    black_block.classList.add('black_block_js')
    img.classList.add('img_js')
}, 100)
//Загрузка
let box_one = document.querySelector('.box_one')
let box_two = document.querySelector('.box_two')
let box_three = document.querySelector('.box_three')
let box_four = document.querySelector('.box_four')
let t = document.querySelectorAll('.t')
let box_procent12 = document.querySelector('.box_procent')
let box_procent_one = document.querySelector('.box_procent_one')
let box_procent_two = document.querySelector('.box_procent_two')
let box_procent_three = document.querySelector('.box_procent_three')
let box_procent_four = document.querySelector('.box_procent_four')
let tx1 = document.querySelector('.tx1')
let tx2 = document.querySelector('.tx2')
let tx3 = document.querySelector('.tx3')
let tx4 = document.querySelector('.tx4')
// 
let k1 = document.querySelector('.k1')
let k2 = document.querySelector('.k2')
let k3 = document.querySelector('.k3')
let k4 = document.querySelector('.k4')
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY
    let top = box_procent12.offsetHeight + 1150
    if (scrollTop >= top) {
        setTimeout(() => {
            box_one.classList.add('vernis2')
            box_procent_one.classList.add('shadow')
        }, 001)
        setTimeout(() => {
            box_two.classList.add('vernis2')
            box_procent_two.classList.add('shadow')
        }, 1900)
        setTimeout(() => {
            box_three.classList.add('vernis2')
            box_procent_three.classList.add('shadow')
        }, 2860)
        setTimeout(() => {
            box_four.classList.add('vernis2')
            box_procent_four.classList.add('shadow')
        }, 3470)
    }
}
)

//DRAG AND DROP
let item = document.querySelectorAll('.item_partners')
let block = document.querySelector('.partners_logo')
let children;
let prev;
function start() {
    prev = this
    children = this.children //блок который я взял
    console.log('start');
}
function enter() {
    console.log('enter');
}
function over(e) {
    e.preventDefault()
}
function leave() {
    console.log('leave');
}
function end() {
    console.log('end')
}
let children2;
function drop() {
    for (let it of children) {
        this.append(it)
    }
    children2 = this.children
    for (let it1 of children2) {
        prev.append(it1)
        console.log(prev);
    }
    this.classList.remove('border')
}
let item21 = document.querySelector('.t1')
for (let itemb of item) {
    itemb.addEventListener('dragstart', start)
    itemb.addEventListener('dragenter', enter)
    itemb.addEventListener('dragover', over)
    itemb.addEventListener('dragleave', leave)
    itemb.addEventListener('dragend', end)
    itemb.addEventListener('drop', drop)
}
//AOS
AOS.init({
    easing: 'ease-out-back',
    duration: 1700
});


//НАЙТМОУТ
let white = document.querySelector('#white_css')
let rot1 = document.querySelector('.rot1')
let rot2 = document.querySelector('.rot2')
let rot3 = document.querySelector('.rot3')
let rot4 = document.querySelector('.rot4')
let icon = document.querySelector('.icon')
let button_header = document.querySelector('.button_header').addEventListener('click', svet)
let ic = document.querySelector('#ic')
let podajde = document.querySelector('.podajde')
let js_svet = document.querySelector('.js_svet')
function svet() {
    podajde.classList.add('podajde_vse')
    if (white.getAttribute('href') == "" ){
        setTimeout(() => {
            icon.setAttribute('src', "./image/Vector.svg")
            ic.setAttribute('href', "./image/Vector.svg")
            white.setAttribute("href", "white.css")
            rot1.setAttribute("src", "./image/Ellipse 1 (Stroke).svg")
            rot2.setAttribute("src", "./image/Ellipse 1 (Stroke).svg")
            rot3.setAttribute("src", "./image/Ellipse 1 (Stroke).svg")
            rot4.setAttribute("src", "./image/Ellipse 1 (Stroke).svg")
        }, 2000)
    }else{
        setTimeout(() => {
            icon.setAttribute('src', "./image/Vector.png")
            ic.setAttribute('href', "./image/Vector.png")
            white.setAttribute("href", "")
            rot1.setAttribute("src", "./image/круг.svg")
            rot2.setAttribute("src", "./image/круг.svg")
            rot3.setAttribute("src", "./image/круг.svg")
            rot4.setAttribute("src", "./image/круг.svg")
        },2000)
    }
    setTimeout(() => {
        podajde.classList.remove('podajde_vse')
    }, 5000)
}