/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.getElementById("btn")
const data = document.getElementById("text")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")

btn.addEventListener("click",function(){
    const d =data.value
    if(d != ""){
    p1.innerHTML = ` ${d} meters =  ${ (d *3.281).toFixed(3) } feet | ${d} feet = ${(d  / 3.281).toFixed(3)  } meters  `
    p2.innerText = ` ${d} liters =  ${ (d * 0.264 ).toFixed(3) } gallons | ${d} gallons = ${(d  / 0.264).toFixed(3)  } liters  ` 
    p3.innerText = ` ${d} kilos =  ${ (d * 2.204 ).toFixed(3) }  pounds | ${d}  pounds = ${(d  / 2.204).toFixed(3)  } kilos  ` 
    } 
})