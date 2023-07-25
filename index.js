// VARIÁVEIS //

let sright = window.document.getElementById("sright");
let leonardo = window.document.getElementById("leonardo");
let bruna = window.document.getElementById("bruna");
let samantha = window.document.getElementById("samantha");
let sleft = window.document.getElementById("sleft");

// FUNÇÕES //

function paraDireita() {
    bruna.style = "display: none";
    samantha.style = "display: flex";
    sright.style = "display: none";
    sleft.style = "display: flex";
};

function paraEsquerda() {
    samantha.style = "display: none";
    bruna.style = "display: flex";
    sleft.style = "display: none";
    sright.style = "display: flex";
}

