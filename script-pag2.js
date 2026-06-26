const direita = document.getElementById("direita");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        window.location.href = "index.html";
    }
});

direita.addEventListener("click", () => {
        window.location.href = "pag1.html";
});