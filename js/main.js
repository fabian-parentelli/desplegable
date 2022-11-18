let listaElementos = document.querySelectorAll(".listButton--click");

listaElementos.forEach(elementos => {
    elementos.addEventListener("click", () => {
        elementos.classList.toggle("arrow");  //toggle saca y pone una clase
        let height = 0;
        let menu = elementos.nextElementSibling; // Toma al hermano adyacente de elemntos seria en este caso listShow
        console.log(menu.scrollHeight) // Calcula el hight automaticamente el alto minimo para que no desborde cada      sub-menú
        if(menu.clientHeight == "0") {   //Si el alto del menu es igual a 0, que es el alto por defecto 
            height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`;
    })
})
