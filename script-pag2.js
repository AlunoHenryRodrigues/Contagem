const direita = document.getElementById("direita");
const esquerda = document.getElementById("esquerda");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        window.location.href = "pag3.html";
    }

    if (event.key === "ArrowLeft") {
        window.location.href = "pag1.html"
    }
});

direita.addEventListener("click", () => {
        window.location.href = "pag3.html";
});

esquerda.addEventListener("click", () => {
    window.location.href = "pag1.html";
});