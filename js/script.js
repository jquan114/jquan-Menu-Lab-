
// Task 3.0
// Copy the following data structure to the top of script.js:

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  // Task 1.0
// Select and cache the <main>element in a variable named mainEl.
let mainEL = document.querySelector('main');
console.log(mainEL)

// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'
var style = getComputedStyle(document.body)

console.log( style.getPropertyValue('--main-bg') ) // #336699

mainEL.style.background =  style.getPropertyValue('--main-bg')

// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.
// var style = getComputedStyle(document.body)

// console.log( style.getPropertyValue('--main-bg') ) // #336699
mainEL.innerHTML = '<h1> SEI Rocks!</h1>';

// Task 1.3
// Add a class of flex-ctrto mainEl.

// Hint: Element.classList API
mainEL.className = 'flex-ctr';

// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

const topMenuEl = document.querySelector("#top-menu");

console.log("topMenuEl", topMenuEl)
// Task 2.1
// Set the height topMenuEl element to be 100%.

topMenuEl.style.height = "100%"
console.log(topMenuEl.style)


// Task 2.2

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.background= style.getPropertyValue('--top-menu-bg')


// Task 2.3
// Add a class of flex-around to topMenuEl

topMenuEl.className = 'flex-around;';


//   Task 3.1
//   Iterate over the entire menuLinks array and for each "link" object:
  
//   Create an <a> element.
  
//   On the new element, add an href attribute with its value set to the href property of the "link" object.
  
//   Set the new element's content to the value of the textproperty of the "link" object.
  
//   Append the new element to the topMenuEl element.



menuLinks.forEach (link => {
    let newMenu = document.createElement("a");
    

    newMenu.setAttribute("href", link.href)
    console.log(newMenu)

    newMenu.innerText = link.text

    topMenuEl.append(newMenu)
   

})
