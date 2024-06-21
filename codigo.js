 let caja = document.querySelector(".nuve");
 let caja2 = document.querySelector(".contenedor");
 
 let ancho = caja2.getBoundingClientRect().width;
        
let elegir = [
"❤️","😍","💕","💘","💞",
"💟","🌛","💌","🌹","🎶"
]
        
setInterval(function() {
let x = Math.floor(Math.random()*300)
let a = Math.floor(Math.random()*
        elegir.length)
let letras = document.createElement("p")
caja.appendChild(letras)
letras.classList.add("letras")
letras.innerHTML = `${elegir[a]}`
letras.style.left = x+"px"
setInterval(()=>{
letras.remove(letras)
},1000);
},50);
        
for(let i = 0;i < 50; i++){    
let letras = document.createElement("p")
    caja2.appendChild(letras)
    letras.classList.add("estrellas")
    letras.innerHTML = "✨"
 
setInterval(()=>{
let x = Math.floor(Math.random()*ancho)
let y = Math.floor(Math.random()*200)
    letras.style.left = x+"px"
    letras.style.top = y+"px"  
},3000)
    
};
