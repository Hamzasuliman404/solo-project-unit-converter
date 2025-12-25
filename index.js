const convertBtnEl = document.getElementById("convert-btn")

const inputFiledEl = document.getElementById("input-filed")

let contentEl = document.getElementById("content")

convertBtnEl.addEventListener("click",function(){
    contentEl.innerHTML = `
    <div class="unit-card">
                <h2>Length (Meter/Feet)</h2>
                <p>${inputFiledEl.value} meters = ${(Number(inputFiledEl.value)* 3.281).toFixed(3)} feet | ${inputFiledEl.value} feet = ${(Number(inputFiledEl.value)/ 3.281).toFixed(3)} meters</p>
            </div>
    `
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/