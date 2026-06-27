const direita = document.getElementById("direita");
const esquerda = document.getElementById("esquerda");

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