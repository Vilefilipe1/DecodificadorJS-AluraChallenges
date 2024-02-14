let video = document.querySelector(".loading-video");
let loading = document.getElementsByClassName("loading")[0];
let main = document.querySelector("main");
let input = document.getElementById("input");
let titulo = document.getElementById("msg-titulo");
let principal = document.getElementById("msg-principal");
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
    titulo.innerHTML = "";
    principal.innerHTML = palavraCript;

    palavraSecreta = [];

}

function descriptografar() {
    palavraSeparada = input.value.split("");
    palavraSeparada.forEach(trocarRev);
    let palavraCript = palavraSeparada.join("");
    titulo.innerHTML = "";
    principal.innerHTML = palavraCript;

    palavraSeparada = [];
}

video.addEventListener("ended", (event) => {
    main.style.visibility = "block";
    loading.style.display = "none";
    

  });

