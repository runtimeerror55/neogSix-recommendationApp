let categories = document.querySelectorAll('.category')
let output = document.querySelector('.output-Container')
let arrayOfBookObjects = [
    { 0: "javascript the definitive guide 4/5}", 1: "you dont know js 4/5", 2: "eloquent js 4/5" },
    { 0: "theory of everything 4/5", 1: "the feyman lectures 4/5", 2: "relativity 4/5" },
    { 0: "atomic habits 4/5", 1: "psycology of money 4/5", 2: "rich dad poor dad 4/5" }
]
categories.forEach((element, index) => {
    element.addEventListener('click', () => {
        output.innerHTML = `
         <div class= "output">${arrayOfBookObjects[index][0]}</div>
         <div class="output">${arrayOfBookObjects[index][1]}</div>
         <div class="output">${arrayOfBookObjects[index][2]}</div>`
    })
})