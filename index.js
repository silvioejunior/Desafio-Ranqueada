
function calcPartidas(){
    let vitoria = 61
    let derrota = 30
    let saldo = vitoria - derrota
    return saldo;
}
function rankPartidas(){
    let rankPlayer
    let saldo = calcPartidas()
    if (saldo <= 10){
         rankPlayer = "Ferro"
    }
    else if (saldo <= 20){
         rankPlayer = "Bronze"
    }
    else if (saldo <= 50){
         rankPlayer = "Prata"
    }
    else if (saldo <= 60){
         rankPlayer = "Ouro"
    }
    else if (saldo <= 90){
         rankPlayer = "Diamante"
    }
    else if (saldo <= 100){
         rankPlayer = "Lendário"
    }
    else if (saldo >= 101){
         rankPlayer = "Imortal"
    }
    return rankPlayer
}
console.log(`O Herói tem de saldo de ${calcPartidas()} está no nível de ${rankPartidas()}`);
