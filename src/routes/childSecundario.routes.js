import ChildDaos from "../daos/child/ChildDaos.js";

const ApiChild = new ChildDaos('child');

process.on('message', async msg => {
    console.log(`mensaje desde el procesos principal: ${msg}`);

    const random = await ApiChild.generarRandom(msg)
        process.send(`Respuesta del Proceso Principal: ${random}`)
});

