// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header')
//console.log(header);
const logoTitle = document.querySelector('h1')
//console.log(logoTitle);
const firstCard = document.getElementsByClassName('card')
//console.log(firstCard);
// B- finding within one particular element
const imageFirstCard = document.getElementsByClassName('card-img-top')
//console.log(imageFirstCard)
const titleFirstCard = document.querySelector('h2.card-title')
//console.log(titleFirstCard)
const subtitleFirstCard = document.querySelector('h3')
//console.log(subtitleFirstCard)
const textFirstCard = document.querySelector('p.card-text')
//console.log(textFirstCard)
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
console.log(link1FirstCard)
const link2FirstCard = link1FirstCard.nextElementSibling
console.log(link2FirstCard)


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const navItems = document.querySelectorAll('nav a')
// B- Loop over the links and console.log their text content
navItems.forEach(a => console.log(a.textContent))
// C- Turn the collection of links into a real array
const arrNavItems = Array.from(navItems)
// D- Use .filter to find the anchor tag with the textContent of "Home"
const result = arrNavItems.filter(a => a.textContent === "Home")
console.log(result)

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
document.querySelector('h1').textContent = 'Lambda Dog'
//  B- Have the students research online the difference between textContent and innerText
//textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows “human-readable” elements.

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
document.querySelector('img.card-img-top').src = 'https://howtotrainthedog.com/wp-content/uploads/2016/05/Husky-Shepherd-Mix.jpg'
//  B- Using .setAttribut'e to change a few attributes
document.querySelector('img.card-img-top').setAttribute('alt', 'dogs are a mans best friend')

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element
document.querySelector('h2').style.color = 'blue'

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogNavItem = document.createElement('a')
blogNavItem.textContent = 'Blog'
blogNavItem.classList.add('menu-item')
document.querySelector('nav').appendChild(blogNavItem)

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true)
document.querySelector('div.card-group').appendChild(secondCard)


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
