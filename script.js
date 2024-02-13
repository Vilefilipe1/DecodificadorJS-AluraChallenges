let video = document.querySelector(".loading-video");
let loading = document.getElementsByClassName("loading")[0];
let main = document.querySelector("main");
let input = document.getElementById("input").value;
let titulo = document.getElementById("msg-titulo");
let principal = document.getElementById("msg-principal");
let palavraCripto = "";

function cripto(letra, frase) {
    if (input.includes(letra)) {
        palavraCripto = palavraCripto + frase;

    }
}

function descriptografar() {
    titulo.innerHTML = "";
    principal.innerHTML = "aaaaaaaaaaaaa";
}

function criptografar() {
    titulo.innerHTML = "";
    palavraCripto = "";
    
    cripto("a", "ai")
    cripto("e", "enter")
    cripto("i", "imes")
    cripto("o", "ober")
    cripto("u", "ufat")

    principal.innerHTML = palavraCripto;

}

video.addEventListener("ended", (event) => {
    main.style.visibility = "block";
    loading.style.display = "none";
    

  });

