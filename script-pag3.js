const direita = document.getElementById("direita");
const esquerda = document.getElementById("esquerda");
const qtdSalas = document.getElementById("qtd-salas");
const qtdQuadros = document.getElementById("qtd-quadros");
const qtdEsculturas = document.getElementById("qtd-esculturas");
const qtdFotos = document.getElementById("qtd-fotos");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        window.location.href = "pag4.html";
    }

    if (event.key === "ArrowLeft") {
        window.location.href = "pag2.html"
    }
});

direita.addEventListener("click", () => {
        window.location.href = "pag4.html";
});

esquerda.addEventListener("click", () => {
    window.location.href = "pag2.html";
});

function count(elemento, qtd, interval, timeout) {
    setTimeout(() => {
        let cont = 1;
        const timer = setInterval(() => {
            elemento.textContent = cont;

            cont++

            if (cont === qtd + 1) {
                clearInterval(timer)
            }
        }, interval);
    }, timeout);
}

count(qtdSalas, 15, 20, 550);
count(qtdQuadros, 180, 1, 1200);
count(qtdEsculturas, 50, 10, 2400);
count(qtdFotos, 80, 5, 3150);