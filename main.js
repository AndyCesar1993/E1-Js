class Pizza{
    constructor(id,nombre,ingredientes,precio){
        this.id=id;
        this.nombre=nombre;
        this.ingredientes=ingredientes;
        this.precio=precio;
    }
}

const pizza=[
    new Pizza(100,"Napolitana",["muzzarella","tomate","ajo","perejil"],1000),
    new Pizza(105,"Jamon y morron",["muzzarella","jamon","morron"],1100),
    new Pizza(110,"Jamon y huevo",["muzzarella","jamon","huevo"], 1300),
    new Pizza(115,"Fugazzeta",["muzzarella","cebolla"],1000),
    new Pizza(120,"Muzzarella",["muzzarella",],950),
    new Pizza(125,"Anchoas",["muzzarella","anchoas","jamon"],1150),

]

//a)  Las pizzas que tengan un id impar. 

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
})



