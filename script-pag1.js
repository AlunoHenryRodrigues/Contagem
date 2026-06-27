const direita = document.getElementById("direita");
const esquerda = document.getElementById("esquerda");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        window.location.href = "pag2.html";
    }

    if (event.key === "ArrowLeft") {
        window.location.href = "index.html"
    }
});

direita.addEventListener("click", () => {
        window.location.href = "pag2.html";
});

esquerda.addEventListener("click", () => {
    window.location.href = "index.html";
});