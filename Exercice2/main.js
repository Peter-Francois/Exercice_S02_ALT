const min_time = 3;
const max_time = 10;

function startPreparation(nb_cofee){
    for (let i = 0; i < nb_cofee; i++){
        make_one_cofee();
    }
}

function make_one_cofee(){
    const randomNumber = Math.floor(Math.random() * (max_time - min_time + 1)) + min_time;
    let preparation = document.getElementById("preparation");
    
}


document.getElementById("startBtn").addEventListener('click', function() {
    const nb_cofee = document.getElementById("coffeeInput").value;
    startPreparation(nb_cofee);
}
)