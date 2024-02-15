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
let root = document.querySelector(':root');
let botaoDark = document.getElementById("botao__dark");
let botaoLight = document.getElementById("botao__light");


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
    navigator.clipboard.writeText(result__resposta__principal.innerHTML)
}

function darkmode() {
    root.style.setProperty("--background-color", "#1c1f20")
    root.style.setProperty("--background2-color", "#181a1b")
    root.style.setProperty("--primary-color", "#0A3871")
    root.style.setProperty("--border-color", "#8cc4f5")
    root.style.setProperty("--font-color", "#b5afa6")
    root.style.setProperty("--font2-color", "White")
    botaoDark.style.backgroundColor = "#8cc4f5";
    botaoLight.style.backgroundColor = "#1c1f20";    
    botaoDark.style.color = "#0A3871";
    botaoLight.style.color = "#0A3871";
}

function daymode() {
    root.style.setProperty("--background-color", "White")
    root.style.setProperty("--background2-color", "#F3F5FC")
    root.style.setProperty("--primary-color", "#0A3871")
    root.style.setProperty("--border-color", "#0A3871")
    root.style.setProperty("--font-color", "#495057")
    root.style.setProperty("--font2-color", "Black")
    botaoDark.style.backgroundColor = "White";
    botaoLight.style.backgroundColor = "#0A3871";
    botaoDark.style.color = "Black";
    botaoLight.style.color = "Black";

}

video.addEventListener("ended", (event) => {
    main.style.visibility = "block";
    loading.style.display = "none";
    

  });

