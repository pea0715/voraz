const PesoMochila = (PesoMaximo, elementos) => {
    let PesoActual = 0;
    let Mochila = [];

    for (let i = 0; i < elementos.length; i++){
        elementos[i].Precio = (elementos[i].valor/elementos[i].Peso).toFixed(2)
    }

    elementos = elementos.sort((a, b) => b.Precio - a.Precio)
    
    for (let j = 0; j < elementos.length; j++) {
        if(PesoActual < PesoMaximo){
            if((PesoMaximo - PesoActual) >= elementos[j].Peso){     
                elementos[j].Cantidad++;
            }else{
                elementos[j].Cantidad = ((1/elementos[j].Peso)*(PesoMaximo - PesoActual)).toFixed(1) 
            }
            PesoActual += elementos[j].Peso;
            Mochila.push(elementos[j]);
        }     
    }
    return Mochila
};

const ValotTotal = (Mochila) => {
    let valorTotal = 0;
    for (let i = 0; i < Mochila.length; i++) {
        valorTotal += Math.round(Mochila[i].valor * Mochila[i].Cantidad);
    }
    return valorTotal
}

const PesoTotal = (Mochila) => {
    let PesoTotal = 0;
    for (let i = 0; i < Mochila.length; i++) {
        PesoTotal += Math.round(Mochila[i].Peso * Mochila[i].Cantidad);
    }
    return PesoTotal
}

const Dato = (Mochila) => {

    console.log("Peso Total: ", PesoTotal(Mochila));
    console.log("Valor Total: ", ValotTotal(Mochila));
    console.log(Mochila);
}

let PesoMaximo = 24;
let elementos = [
{ Codigo: "01", Peso: 7, valor:  14, Precio: 0, Cantidad: 0},
{ Codigo: "02", Peso: 15, valor: 15, Precio: 0, Cantidad: 0},
{ Codigo: "03", Peso:  9, valor: 16, Precio: 0, Cantidad: 0},
{ Codigo: "04", Peso:  5, valor: 18, Precio: 0, Cantidad: 0},
{ Codigo: "05", Peso: 12, valor: 17, Precio: 0, Cantidad: 0},
];
final = (PesoMochila(PesoMaximo, elementos));
console.log(Dato(final));