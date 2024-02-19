// Строгий режим
"use strict"
// код


//Ширина/висота
// const windowWidth = window.innerWidth
// console.log(windowWidth)
// const windowHeight = window.innerHeight
// if (windowHeight >= 500) {
// 	console.log(windowHeight)
// }

//Адресний рядок браузера
// console.log(location.href)
//Перикидання користувача
// location.href += '#popup'

//DOM

//Навігація по документу

//Звенрнення(Отримання) до тегів
// const --- = document.documentElement(-тег html)
// const --- = document.head(-тег head)
// const --- = document.body(-тег body)
//т.д.....

//До дочірніх
// const --- = ---.firstElementCild(last)
//До всіх дочірніх
// const --- = ---.children

//До сусідніх
// .previousElementSibling(Попередній)
// .nextElementSibling(Наступний)

//До будь якого

// 1)Отримування першого знайденог---.querySelector
// 2)Отримування списку(всього)---.querySelectorAll

//ForEach--метод перебору

//До батьеівського елементу
// .parentElement

//Пошук в батьківських елементах
// .colsest

//Зміна документу

//innerHTML--отримати або змінити ТЕГИ з текстом всерединні===----.innerHTML = 'тег заміни'
//textContent--отримати або змінити лише текст всерединні===----.textContent = 'текст зміни'

//Створення об'єктів
// createElement--створення нового елементу === let-- - = document.createElement('елемент')

//Додавання та створення
//insertAdjacentHTML-тег/Text-текст/Element-новий елемент(куди, що)

//Клонування елементу
//.cloneNode - клонує обєкт без вмісту
//.cloneNode(true) - клонує обєкт з вмістом

//Видалення
//.remove()

//Cтилі та класи





















// Задача №1
// Отримати в константу елемент < body >

// const body = document.body
// console.log(body)


// 	Задача №2
// Написати функцію, яка додає в < body > список UL
// з певною кількістю LI(кількість має передаватись як параметр функції, також мати значення за замовченням)

// const body = document.body
// let ulItem = document.createElement('ul')
// let liItem = ''
// function creteList(kef = 2) {
// 	for (let i = 1; i <= kef; ++i) {
// 		liItem += `<li></li>`
// 	}
// 	ulItem.insertAdjacentHTML("afterbegin", liItem)
// 	body.insertAdjacentElement("afterbegin", ulItem)
// }
// creteList(3)


// Задача №3
// Додати до елементу < body > класс loaded.
// Потім перевірити чи є клас loaded у елемента < body >
// 	і, якщо є, додати стиль кольору тесту зедлений.

// const body = document.body
// body.classList.add('loaded')
// if (body.classList.contains('loaded')) {
// 	body.style.color = 'green'
// }


// 		Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// 	та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

// const Objects = document.querySelectorAll('.item')
// Objects.forEach((Object, index) => {
// 	Object.classList.add('active')
// 	Object.textContent = `Елемент №${++index}`
// })

// 		Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

// const button = document.querySelector('button')
// button.scrollIntoView({
// 	block: "end",
// 	inline: "nearest",
// 	behavior: "smooth"
// })


// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector('.link')
link.dataset.lnk = "100"

// if (link.getAttribute('data-lnk') < 200) {
// 	link.style.color = 'red'
// }