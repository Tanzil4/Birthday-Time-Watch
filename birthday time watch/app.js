let hour = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let day = document.getElementById("day")


let now = new Date()

let settime = new Date('9/27/2024')


let diff =  settime.getTime() - now.getTime() 


setInterval(function(){
let current = new Date()

let day1 = diff / 1000 / 60 /60 /24 

let hour1 = 24 - current.getHours()
let min1 = 60 - current.getMinutes()
let sec1 = 60 - current.getSeconds()


day.innerText = Math.floor(day1)
hour.innerText = hour1
min.innerText = min1
sec.innerText = sec1

},1000)