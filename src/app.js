// let val; // initialize the variable

// val = document.all; // get all the dom in the webpage
// val=document.domain;
// val=document.forms;
// val=document.links;
// val=document.scripts;
// console.log(val)

// getElement
// console.log(document.getElementById('task-title'))
// console.log(document.getElementById('task-title').id)
// console.log(document.getElementById('task-title').className)

// const taskTitle = document.getElementById('task-title')

// Change styling
// taskTitle.style.background = "#333" // change the bg color of the selected element
// taskTitle.style.color = "#fff" // change the font color of the selected element
// taskTitle.style.padding = "3px" // add padding to the selected element

// hide the selected element
// document.getElementById('task-title').style.display= "none"

// Change content
// taskTitle.textContent = 'Task List'
// taskTitle.innerText = 'My Tasks'
// insert html
// taskTitle.innerHTML = '<span style="color:blue">ToDo List</span>';

// Query Selector
// const docSelector = document.querySelector("#task-title")
console.log(document.querySelector("#task-title"))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5'))

document.querySelector('li').style.color = 'red' //only the first li element will be affected
document.querySelector('ul li').style.color = 'blue' //only the first li/uls element will be affected

// select the last child of the element to be affected by the selector
document.querySelector('li:last-child').style.color = 'red'

document.querySelector('li:nth-child(3)').style.color = 'green'

document.querySelector('li:nth-child(4)').textContent = 'This is a text'


document.querySelector('li:nth-child(odd)').style.background = '#f4f4f4'
