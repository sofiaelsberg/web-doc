"use strict";


function erSynlig(elementId) {
    const elementBoks = document.getElementById(elementId).getBoundingClientRect();
    const halvtredsPct = elementBoks.height * 0.5;
    const start = window.innerHeight - halvtredsPct;

    if (elementBoks.top <= start && elementBoks.bottom - halvtredsPct > 0) {
        return true;
    } else {
        return false;
    }
}


function aktiverMultimedier() {

    for (let i = 0; i <= AVIdListe.length - 1; i++) {

        if (erSynlig(AVIdListe[i])) {
            AVIndholdsliste[i].loop = true;
            AVIndholdsliste[i].play();
        } else {
            AVIndholdsliste[i].pause();
            AVIndholdsliste[i].currentTime = 0;
        }
    }
}


window.addEventListener("scroll", function () {
    aktiverMultimedier();
});


const AVIdListe = ["video"];
const AVIndholdsliste = [];



AVIndholdsliste[0] = document.getElementById("video");
AVIndholdsliste[1] = document.getElementById("video1");
