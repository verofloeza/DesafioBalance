let listaOcurrencias = [];
let cantidad;

function generarAletario(cant) {
    let numRandom = Math.random();
    let numAleatorio = parseInt(numRandom * cant) + 1;
    return numAleatorio;
}

class Child{
    constructor(){}

    async generarRandom(cant){
       
        let numAleatorio = 0;
        for (let conteo = 0; conteo < cant; conteo++) {

            numAleatorio = generarAletario(cant);
      
            listaOcurrencias.push(numAleatorio)
            
        }
    
        return await listaOcurrencias;
    
    }
}


export default Child