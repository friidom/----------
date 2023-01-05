let sri = 3
let between = 250
let document_width = document.documentElement.offsetWidth
let text_and_hronos = document.querySelector(".text_and_hronos")
let gradient = document.querySelector('.gradient_border_and_img')
let h22 = document.querySelector('.h22')
let h21 = document.querySelector('.h21')
let text_section_3 = document.querySelector('.text_section_3')
if (document_width <= 1400) {
  gradient.setAttribute('data-aos', 'fade-up-left')
  text_and_hronos.setAttribute('data-aos', "fade-right")
}
if (document_width <= 1200) {
  between = 160
  gradient.setAttribute('data-aos', '')
}
if (document_width <= 990) {
  sri = 2
}
if (document_width <= 700) {
  sri = 1
  h22.setAttribute('data-aos', '')
  h21.setAttribute('data-aos', '')
  text_section_3.setAttribute('data-aos', '')

}
let swiper = new Swiper(".swiper", {
  slidesPerView: sri,
  spaceBetween: between,
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
// //₽
// //ХРОНОС
// // Определяем действующие элементы на странице
// const year = document.querySelector('#year');
// const days = document.querySelector('#days');
// const hours = document.querySelector('#hours');
// const minutes = document.querySelector('#minutes');
// const seconds = document.querySelector('#seconds');
// const countdown = document.querySelector('#countdown');
// const preloader = document.querySelector('#preloader');

// // Делаем расчеты
// const currentYear = new Date().getFullYear(); // 2020
// const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// // Устанавливаем год на страницу
// year.innerText = currentYear + 1;

// function updateCounter() {
// 	const currentTime = new Date();
// 	const diff = nextYear - currentTime;

// 	// Перевод в дни
// 	const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
// 	// Часов всего, далее остаток от деления на 24 (преобразования в дни), получаем 8 часов
// 	const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
// 	// Минут всего, далее остаток от преобразования в часы, минут осталось
// 	const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
// 	// Секундк всего, далее остаток от преобразования в минуты, секунд осталось
// 	const secondsLeft = Math.floor(diff / 1000) % 60;

// 	console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

// 	i_dney.innerText = daysLeft;
// 	i_chasov.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
// 	i_minut.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
// 	i_secund.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
// }

// // Запускаем расчет 1 раз в секунду (каждую секунду)
// setInterval(updateCounter, 1000);

// setTimeout(function () {
//     preloader.remove();
//     countdown.style.display = 'flex';
// }, 1000);

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
//Загрузка калонки
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
let k1 = document.querySelector('.k1')
let k2 = document.querySelector('.k2')
let k3 = document.querySelector('.k3')
let k4 = document.querySelector('.k4')
window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY
  let top = box_procent12.offsetHeight - 100
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
let la = document.querySelector('#la')
localStorage.setItem('t', null)
let white = document.querySelector('#white_css')
let rot1 = document.querySelector('.rot1')
let rot2 = document.querySelector('.rot2')
let rot3 = document.querySelector('.rot3')
let rot4 = document.querySelector('.rot4')
let icon = document.querySelector('.icon')
let button_header = document.querySelector('.block_den_i_noch').addEventListener('click', svet)
let ic = document.querySelector('#ic')
let js_svet = document.querySelector('.js_svet')
let den_i_noch11 = document.querySelector('.block_den_i_noch1')
function svet() {
  la.setAttribute('title', "Нажми на меня если хочешь темноты)")
  localStorage.setItem('theme', "light_mode")
  icon.setAttribute('src', "./image/Vector.svg")
  ic.setAttribute('href', "./image/Vector.svg")
  white.setAttribute("href", "white.css")
  rot1.setAttribute("src", "./image/Ellipse 1 (Stroke).svg")
  rot2.setAttribute("src", "./image/Ellipse 1 (Stroke).svg")
  rot3.setAttribute("src", "./image/Ellipse 1 (Stroke).svg")
  rot4.setAttribute("src", "./image/Ellipse 1 (Stroke).svg")
  den_i_noch11.classList.remove('top4')
  document.querySelector(".block_den_i_noch").classList.add('not_active')
  document.querySelector('.block_den_i_noch1').classList.add('active_b')
}
document.querySelector('.block_den_i_noch1').addEventListener('click', tma)
function tma() {
  la.setAttribute('title', "Нажми на меня если нужен свет)")
  localStorage.setItem('theme', "dark_mode")
  document.querySelector(".block_den_i_noch").classList.remove('not_active')
  document.querySelector('.block_den_i_noch1').classList.remove('active_b')
  icon.setAttribute('src', "./image/Vector.png")
  ic.setAttribute('href', "./image/Vector.png")
  white.setAttribute("href", "")
  rot1.setAttribute("src", "./image/круг.svg")
  rot2.setAttribute("src", "./image/круг.svg")
  rot3.setAttribute("src", "./image/круг.svg")
  rot4.setAttribute("src", "./image/круг.svg")
  den_i_noch11.classList.remove('top4')
}
let theme = localStorage.getItem('theme')
if (theme == "dark_mode") {
  tma()
} else {
  la.setAttribute('title', "Нажми на меня если хочешь темноты)")
  icon.setAttribute('src', "./image/Vector.svg")
  ic.setAttribute('href', "./image/Vector.svg")
  white.setAttribute("href", "white.css")
  rot1.setAttribute("src", "./image/Ellipse 1 (Stroke).svg")
  rot2.setAttribute("src", "./image/Ellipse 1 (Stroke).svg")
  rot3.setAttribute("src", "./image/Ellipse 1 (Stroke).svg")
  rot4.setAttribute("src", "./image/Ellipse 1 (Stroke).svg")
  den_i_noch11.classList.remove('top4')
  document.querySelector(".block_den_i_noch").classList.add('not_active')
  document.querySelector('.block_den_i_noch1').classList.add('active_b')
}
// 
let btnn1 = document.querySelector('.btnn1').addEventListener('click', biography)
let btnn2 = document.querySelector('.btnn2').addEventListener('click', biography)
let btnn3 = document.querySelector('.btnn3').addEventListener('click', biography)
let btnn4 = document.querySelector('.btnn4').addEventListener('click', biography)
let btnn5 = document.querySelector('.btnn5').addEventListener('click', biography)
let btnn6 = document.querySelector('.btnn6').addEventListener('click', biography)
let btnn7 = document.querySelector('.btnn7').addEventListener('click', biography)
let big_black_box = document.querySelector('.big_black_box')
let dimitriy_block = document.querySelector('.dimitriy_block')
let cross = document.querySelector('.cross')
function biography() {
  big_black_box.classList.add('active')
  dimitriy_block.classList.add('active')
  cross.classList.add('active')
  setTimeout(() => {
    cross.classList.add('top_40')
    big_black_box.classList.add('opacity_black')
    dimitriy_block.classList.add('top_biography')
  }, 100)
}
cross.onclick = () => {
  cross.classList.remove('top_40')
  big_black_box.classList.remove('opacity_black')
  dimitriy_block.classList.remove('top_biography')
  registor_block.classList.remove('active_reg')
  registor_block2.classList.remove('active_reg')
  registor_block3.classList.remove('active_reg')
  kursi.classList.remove('top_reg')
  setTimeout(() => {
    big_black_box.classList.remove('active')
    kursi.classList.remove('active_reg')
    dimitriy_block.classList.remove('active')
    cross.classList.remove('active')
    registor_block.classList.remove('active_reg')
    registor_block2.classList.remove('active_reg')
    registor_block3.classList.remove('active_reg')
    setTimeout(() => {
      registor_block.classList.remove('top_reg')
      registor_block2.classList.remove('top_reg')
      registor_block3.classList.remove('top_reg')

    }, 100)
  }, 100)
}


//  БУРГЕР
let burger_menu = document.querySelector(".burger_menu ")
let burger_1 = document.querySelector('.burger_1')
let burger_2 = document.querySelector('.burger_2')
let burger_3 = document.querySelector('.burger_3')
let krujok = document.querySelector('.krujok')
let hr1 = document.querySelector('.hr1')
let hr2 = document.querySelector('.hr2')
let hr3 = document.querySelector('.hr3')
let hr4 = document.querySelector('.hr4')
let hr5 = document.querySelector('.hr5')
let a_menu121 = document.querySelector('.a_menu121')
let a_menu122 = document.querySelector('.a_menu122')
let a_menu123 = document.querySelector('.a_menu123')
let a_menu124 = document.querySelector('.a_menu124')
let a_menu125 = document.querySelector('.a_menu125')
let a_menu126 = document.querySelector('.a_menu126')
let burger_menu_pliz = document.querySelector('.burger_menu_pliz ')
let body = document.body
burger_menu.onclick = () => {
  body.classList.toggle('sktr_scroll')
  burger_1.classList.toggle('one_palka')
  burger_2.classList.toggle('two_palka')
  burger_3.classList.toggle('three_palka')
  krujok.classList.toggle('krujok_an')
  burger_menu.classList.toggle('fix')
  setTimeout(() => {
    burger_menu_pliz.classList.toggle('flex')
  }, 250)
  setTimeout(() => {
    a_menu121.classList.add('amen')
  }, 500)
  setTimeout(() => {
    a_menu122.classList.add('amen')
    hr1.classList.add('hr_write')
  }, 1000)
  setTimeout(() => {
    a_menu123.classList.add('amen')
    hr2.classList.add('hr_write')
  }, 1500)
  setTimeout(() => {
    a_menu124.classList.add('amen')
    hr3.classList.add('hr_write')
  }, 2000)
  setTimeout(() => {
    a_menu125.classList.add('amen')
    hr4.classList.add('hr_write')
  }, 2500)
  setTimeout(() => {
    a_menu126.classList.add('amen')
    hr5.classList.add('hr_write')
  }, 3000)
}
// Модалка
// document.querySelector('.button_header').addEventListener('click', button_header12x)
let button_header1 = document.querySelector('.gradient_button').addEventListener('click', button_header12)
let registor_block = document.querySelector('.registor_block')
let registor_block2 = document.querySelector('.registor_block2')
let registor_block3 = document.querySelector('.registor_block3')
let yes_zarega = document.querySelector('.yes_zarega')
let yes_zarega2 = document.querySelector('.yes_zarega2')
let yes_zarega3 = document.querySelector('.yes_zarega3')
let kursi = document.querySelector('.kursi')
let thank = document.querySelector('.thank')
document.querySelector('.ischezni').addEventListener('click', button_header12)
yes_zarega.onclick = () => {
  registor_block.classList.add('udi')
  kursi.classList.add('active_reg')
  setTimeout(() => {
    kursi.classList.add('top_reg')
    registor_block.classList.toggle('active_reg')
  }, 1100)
  // 
  let kurs_text = document.querySelector('.kurs_text')
  let input1 = document.querySelector('.input1').value;
  kurs_text.innerHTML = input1
}
yes_zarega2.onclick = () => {
  registor_block2.classList.add('udi')
  kursi.classList.add('active_reg')
  let kurs_text = document.querySelector('.kurs_text')
  let input1 = document.querySelector('.input1').value;
  kurs_text.innerHTML = input1
}
yes_zarega3.onclick = () => {
  registor_block3.classList.add('udi')
  thank.classList.add('thank_top')
  cross.classList.remove('active')
  setTimeout(() => {
    thank.classList.remove('thank_top')
    big_black_box.classList.remove('active')
  }, 2000);
}

function button_header12() {
  registor_block.classList.remove('udi')
  cross.classList.add('active')
  big_black_box.classList.add('active')
  registor_block.classList.add('left')
  setTimeout(() => {
    cross.classList.add('top_40')
    big_black_box.classList.add('opacity_black')
    registor_block.classList.add('active_reg')
    setTimeout(() => {
      registor_block.classList.add('top_reg')
    }, 100)
  }, 100)
}
function button_header12x() {
  registor_block2.classList.remove('udi')
  cross.classList.add('active')
  big_black_box.classList.add('active')
  registor_block2.classList.add('left')
  setTimeout(() => {
    cross.classList.add('top_40')
    big_black_box.classList.add('opacity_black')
    registor_block2.classList.add('active_reg')
    setTimeout(() => {
      registor_block2.classList.add('top_reg')
    }, 100)
  }, 100)
}
let kors = document.querySelector('.kors')
let zapis = document.querySelector('.zapis').onclick = () => {
  setTimeout(() => {
    dimitriy_block.classList.remove('top_biography')
    registor_block.classList.remove('active_reg')
    kursi.classList.remove('top_reg')
  }, 1000)
  setTimeout(() => {
    kursi.classList.remove('active_reg')
  }, 2000)
  registor_block3.classList.remove('udi')
  cross.classList.add('active')
  big_black_box.classList.add('active')
  registor_block3.classList.add('left')
  setTimeout(() => {
    cross.classList.add('top_40')
    big_black_box.classList.add('opacity_black')
    registor_block3.classList.add('active_reg')
    setTimeout(() => {
      registor_block3.classList.add('top_reg')
    }, 500)
  }, 500)
}

//Якорь

let link1 = document.querySelector('.link1')
let link2 = document.querySelector('.link2')
let link3 = document.querySelector('.link3')
let link4 = document.querySelector('.link4')
let link5 = document.querySelector('.link5')
let link6 = document.querySelector('.link6')

let sec1 = document.querySelector('.section_3')
let sec2 = document.querySelector('.profecion-box')
let sec3 = document.querySelector('.programm')
let sec4 = document.querySelector('.section_7')
let sec5 = document.querySelector('.grid_pertners')
let sec6 = document.querySelector('.f-icons')

link1.addEventListener("click", jakor1);
link2.addEventListener("click" , jakor2);
link3.addEventListener("click" , jakor3);
link4.addEventListener("click" , jakor4);
link5.addEventListener("click" , jakor5);
link6.addEventListener("click" , jakor6);


function jakor1() {
  event.preventDefault()
  sec1.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest'
  }, false)
}
function jakor2() {
  event.preventDefault()
  sec2.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest'
  }, false)
}
function jakor3() {
  event.preventDefault()
  sec3.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'center'
  }, false)
}
function jakor4() {
  event.preventDefault()
  sec4.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest'
  }, false)
}
function jakor5() {
  event.preventDefault()
  sec5.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'end'
  }, false)
}
function jakor6() {
  event.preventDefault()
  sec6.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'end'
  }, false)
}