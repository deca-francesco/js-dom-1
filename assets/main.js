console.log("js linked");

// prendo il bottone e le immagini tramite id
const lamp_btnEl = document.getElementById("lamp_btn");
const lamp_off_imgEl = document.getElementById("lamp_off_img");
const lamp_on_imgEl = document.getElementById("lamp_on_img");

lamp_btnEl.addEventListener("click", function() {
    // faccio sparire o comparire la prima immagine
    lamp_off_imgEl.classList.toggle("d-none");
    // faccio comparire o sparire la seconda immagine, ma al contrario della prima
    lamp_on_imgEl.classList.toggle("d-none");

    // modifico la scritta del bottone
    if (lamp_btnEl.innerText.includes("Accendi")) {
        lamp_btnEl.innerText.replace("Accendi", "Spegni");
    } else if (lamp_btnEl.innerText.includes("Spegni")) {
        lamp_btnEl.innerText.replace("Spegni", "Accendi")
    }
});