const min_time = 3;
const max_time = 10;

function startPreparation(nb_coffee){
    for (let i = 0; i < nb_coffee; i++){
        let randomNumber = make_one_coffee(i);

        setTimeout(()=> {
            coffeeReady(i, randomNumber);
        }, (randomNumber * 1000));
    }
}

function make_one_coffee(i){
    const randomNumber = Math.floor(Math.random() * (max_time - min_time + 1)) + min_time;
    let preparation = document.getElementById("preparation");
    let p = document.createElement('p');
    p.id = i;
    p.innerHTML = "Préparation du café " + ( i+1 )+ "... (attente de " + randomNumber + " secondes)";
    preparation.appendChild(p);
    return randomNumber;
}

function coffeeReady(i, randomNumber){
    let p_preparation = document.getElementById(i);
    let result = document.getElementById("result");
    let p = document.createElement('p');
    p.innerHTML = "Résultat: Le café " + (i+1) + " est terminé et servi !"
    p_preparation.innerHTML = "Café " + ( i+1 )+ " prêt après " + randomNumber + " secondes !";
    result.appendChild(p);
}


document.getElementById("startBtn").addEventListener('click', function() {
    const nb_coffee = document.getElementById("coffeeInput").value;
    startPreparation(nb_coffee);
}
)