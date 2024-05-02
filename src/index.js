let experienciaHeroi = 2001;
let nomeHeroi = "Knight"; 

switch (true) {
    case (experienciaHeroi === 1000):
        console.log("Seu nível é Ferro");
        break;
    case (experienciaHeroi >= 1001 && experienciaHeroi < 2000):
        console.log("Seu nível é Bronze");
        break;
    case (experienciaHeroi >= 2001 && experienciaHeroi < 5000):
        console.log("Seu nível é Prata");
        break;
    case (experienciaHeroi >= 5001 && experienciaHeroi < 7000):
        console.log("Seu nível é Ouro");
        break;
    case (experienciaHeroi >= 7001 && experienciaHeroi < 8000):
        console.log("Seu nível é Platina");
        break;
    case (experienciaHeroi >= 8001 && experienciaHeroi < 9000):
        console.log("Seu nível é Ascendente");
        break;
    case (experienciaHeroi >= 9001 && experienciaHeroi < 10000):
        console.log("Seu nível é Imortal");
        break;
    case (experienciaHeroi >= 10001):
        console.log("Seu nivel é Radiante");
        break;
    default:
        console.log("Nível desconhecido");
        break;
}

console.log(`O Herói de nome ${nomeHeroi} está no nivel de ${experienciaHeroi}`);
