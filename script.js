let video = document.querySelector(".loading-video");
let loading = document.getElementsByClassName("loading")[0];
let main = document.querySelector("main");
let input = document.getElementById("input");
let resul__start = document.getElementsByClassName("resultado__start")[0];
let resul__resposta = document.getElementsByClassName("resultado__resposta")[0];
let result__resposta__principal = document.getElementById("resultado__resposta__principal");
let palavraSeparada = [];
let palavraSecreta = [];
let novaPalavra = "";

function ifvalue(value, letra, palavra, index, array, length) {
    if (length != false) {
        value == letra ? array.splice(index, length, letra):""
    } else if (length == false) {
        value == letra ? value = palavra:""
        return value
    }
}


function trocar(value, index, array) {
    value = ifvalue(value, "a", "ai", index, array, false)
    value = ifvalue(value, "e", "enter", index, array, false)
    value = ifvalue(value, "i", "imes", index, array, false)
    value = ifvalue(value, "o", "ober", index, array, false)
    value = ifvalue(value, "u", "ufat", index, array, false)

    palavraSecreta.push(value)
}

function trocarRev(value, index, array) {
    ifvalue(value, "a", "ai", index, array, 2)
    ifvalue(value, "e", "enter", index, array, 5)
    ifvalue(value, "i", "imes", index, array, 4)
    ifvalue(value, "o", "ober", index, array, 4)
    ifvalue(value, "u", "ufat", index, array, 4)

    return array
}

function criptografar() {
    palavraSeparada = input.value.split("");
    palavraSeparada.forEach(trocar);
    let palavraCript = palavraSecreta.join("");
    resul__start.style.display = "none";
    resul__resposta.style.display = "flex";
    result__resposta__principal.innerHTML = palavraCript;

    palavraSecreta = [];

}

function descriptografar() {
    palavraSeparada = input.value.split("");
    palavraSeparada.forEach(trocarRev);
    let palavraCript = palavraSeparada.join("");
    resul__start.style.display = "none";
    resul__resposta.style.display = "flex";
    result__resposta__principal.innerHTML = palavraCript;

    palavraSeparada = [];
}

function copiar() {
    
}

video.addEventListener("ended", (event) => {
    main.style.visibility = "block";
    loading.style.display = "none";
    

  });

