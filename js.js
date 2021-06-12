document.addEventListener('DOMContentLoaded', function(){
    pedirDelivery();

    regresarDelivery();

    InfoDelivery();

    verPersonal();

})
let contador = 4;
const Personal = ['Jose', 'Pepe', 'Yon', 'Juan', 'Astroberto']
const Deliverys = [Personal[0], Personal[1], Personal[2], Personal[3], Personal[4]];
const Chef = ['Luigi', 'Mario']


function pedirDelivery(){
    const boton = document.querySelector('.botonPedir');

    boton.addEventListener('click', () => {
        if(contador >= 0){
            alert(`${Personal[contador]} va en camino`)
            contador --;
            Deliverys.pop();
        }else{
        alert("No hay mas deliverys");
        }
    })
}

function regresarDelivery(){
    const boton = document.querySelector('.botonRegresar');

    boton.addEventListener('click', () => {
        if(contador < 4){
            contador ++;
            Deliverys.push(Personal[contador]);
            console.log(Deliverys);
            alert(`Cancelaste el pedido el delivery ${Personal[contador]} se esta devolviendo`)
        }else{
        alert("Todos los delivery estan en el Local");
        }
    })
}

function InfoDelivery(){
    const boton = document.querySelector('.botonInfo')

    boton.addEventListener('click', () => {
      switch(contador){
          case 0: alert(`Estan Cuatro(4) deliverys en camino ${Personal[1]}, ${Personal[2]}, ${Personal[3]} y ${Personal[4]} `)
          break;
          case 1: alert(`Estan Tres(3) deliverys en camino ${Personal[2]}, ${Personal[3]} y ${Personal[4]} `)
          break;
          case 2: alert(`Estan Dos(2) los deliverys en camino ${Personal[3]} y ${Personal[4]} `)
          break;
          case 3: alert(`Hay un Delivery en Camino ${Personal[4]} `)
          break;
          case 4: alert(`No hay ningun Delivery en Camino`)
          break;
          default: alert(`Estan todos los deliverys en camino ${Personal[0]}, ${Personal[1]}, ${Personal[2]}, ${Personal[3]} y ${Personal[4]} `)
          break;
      }
    })    
}

function verPersonal (){
    const boton = document.querySelector('.botonPersonal');

    boton.addEventListener('click', () => {
        full = Deliverys.concat(Chef)
        alert(PersonalCompleto = full.join('--'))
    })
}