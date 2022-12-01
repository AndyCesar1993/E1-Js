class Pizza {
  constructor(id, nombre, ingredientes, precio,img) {
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
    this.img = img;
  }
}

const pizza = [
  new Pizza(1, "Napolitana", ["muzzarella", "tomate", "ajo", "perejil"], 1000, "./assets/pizzas/napolitana.jpg"),
  new Pizza(2, "Jamón y morrón", ["muzzarella", "jamón", "morrón"], 1100, "./assets/pizzas/jamon y morron.jpeg"),
  new Pizza(3, "Jamón, huevo y tomate", ["muzzarella", "jamón", "huevo", "tomate"], 1300, "./assets/pizzas/jamon huevo y tomate.jfif"),
  new Pizza(4, "Fugazzeta", ["muzzarella", "cebolla"], 1000, "./assets/pizzas/fugazzetta.jfif"),
  new Pizza(5, "Muzzarella", ["muzzarella"], 950, "./assets/pizzas/muzzarella.jfif"),
  new Pizza(6, "Anchoas", ["muzzarella", "anchoas", "jamón"], 1150, "./assets/pizzas/Pizza anchoas.webp"),
];


/* //a)  Las pizzas que tengan un id impar. 


const idImpar= pizza.forEach((pizza)=>{
    if (pizza.id % 2 !==0){
        console.log(`La pizza de ${pizza.nombre} tiene un id impar`);
    }
})


//b) ¿Hay alguna pizza que valga menos de $600?
    
const valorMenorA600= pizza.some(pizza => pizza.precio < 600);
console.log(`¿Hay alguna pizza que valga menos de $600?: ${valorMenorA600}`);

//c) El nombre de cada pizza con su respectivo precio.

const listaDePizzas=pizza.map((lista)=>{
    console.log(`La Pizza de ${lista.nombre} tien un valor de: $${lista.precio}`);
})

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

const ingredientesPizzas=pizza.map((elemento)=>{
    console.log(`La Pizza de ${elemento.nombre} tiene los siguientes ingredientes: ${elemento.ingredientes}`)
}) */


//Ejercicio 2 Js

const formulario = document.querySelector(".buscar_pizza");
const idInput = document.querySelector(".id_pizza");
const errorHtml = document.querySelector(".error span");
const contenedorError = document.querySelector(".error");
const contenedorInfoPizza = document.querySelector(".renderizar_pizza");

const pizzaSave= JSON.parse(localStorage.getItem("pizzaSearch")) || [];

const saveToLocalStorage = (searchPizaa)=>{
  localStorage.setItem("pizzaSearch", JSON.stringify(searchPizaa));
 
}

const renderHtml = () =>{ 
  contenedorInfoPizza.innerHTML = `<img class="imagen_pizza" src="${pizzaSave.img}" alt="">
  <h2 class="nombre_pizza">Nombre: <span>${pizzaSave.nombre}</span></h2>
  <p class="ingredientes_pizza">Ingrediente:  <span>  ${pizzaSave.ingredientes}</span> </p>
  <h3 class="precio_pizza">Precio: $${pizzaSave.precio}</h3>`;
}

const error = (id) => {
  contenedorInfoPizza.style.display = "none";
  if (id.value !== ""){
    contenedorError.innerHTML = `El id <span>"${id.value}"</span> no corresponde a ningún producto!!!`
    console.log("ok")
    }
   else  contenedorError.textContent = "Se debe ingresar un valor";
   console.log("no")
}

renderHtml();
const buscarPorId = () => {
  const pizzaId=pizza.find((pizza) => pizza.id == idInput.value);
  if (pizzaId) {
    contenedorInfoPizza.style.display= "flex";
    contenedorError.style.display = "none";
    saveToLocalStorage(pizzaId);
    window.location.reload();
  } else {
    error(idInput);
      contenedorError.style.display="flex";
  }
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 
  buscarPorId();
  formulario.reset(); 
});
