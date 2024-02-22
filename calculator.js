const obliczprostokatPole = () => {
    const dlugosc = parseFloat(document.getElementById('prostokat-dlugosc').value);
    const szerokosc = parseFloat(document.getElementById('prostokat-szerokosc').value);

    if (isNaN(dlugosc) || isNaN(szerokosc)) {
        document.getElementById('prostokat-wynik').innerText = "Wprowadź poprawne liczby";
        return;
    }

    const Pole = dlugosc * szerokosc;
    document.getElementById('prostokat-wynik').innerText = `Pole: ${Pole}`;
}

const obliczprostokatObwod = () => {
    const dlugosc = parseFloat(document.getElementById('prostokat-dlugosc').value);
    const szerokosc = parseFloat(document.getElementById('prostokat-szerokosc').value);

    if (isNaN(dlugosc) || isNaN(szerokosc)) {
        document.getElementById('prostokat-wynik').innerText = "Wprowadź poprawne liczby";
        return;
    }

    const Obwod = 2 * (dlugosc + szerokosc);
    document.getElementById('prostokat-wynik').innerText = `Obwod: ${Obwod}`;
}

const obliczprostokatprzekatna = () => {
    const dlugosc = parseFloat(document.getElementById('prostokat-dlugosc').value);
    const szerokosc = parseFloat(document.getElementById('prostokat-szerokosc').value);

    if (isNaN(dlugosc) || isNaN(szerokosc)) {
        document.getElementById('prostokat-wynik').innerText = "Wprowadź poprawne liczby";
        return;
    }

    const przekatna = Math.sqrt(dlugosc * dlugosc + szerokosc * szerokosc);
    document.getElementById('prostokat-wynik').innerText = `przekatna: ${przekatna.toFixed(2)}`;
}

const obliczprostopadloscianprzekatna = () => {
    const dlugosc = parseFloat(document.getElementById('prostopadloscian-dlugosc').value);
    const szerokosc = parseFloat(document.getElementById('prostopadloscian-szerokosc').value);
    const wysokosc = parseFloat(document.getElementById('prostopadloscian-wysokosc').value);

    if (isNaN(dlugosc) || isNaN(szerokosc) || isNaN(wysokosc)) {
        document.getElementById('prostopadloscian-wynik').innerText = "Wprowadź poprawne liczby";
        return;
    }

    const przekatna = Math.sqrt(dlugosc * dlugosc + szerokosc * szerokosc + wysokosc * wysokosc);
    document.getElementById('prostopadloscian-wynik').innerText = `Przekątna: ${przekatna.toFixed(2)}`;
}

const obliczprostopadloscianobjetosc = () => {
    const dlugosc = parseFloat(document.getElementById('prostopadloscian-dlugosc').value);
    const szerokosc = parseFloat(document.getElementById('prostopadloscian-szerokosc').value);
    const wysokosc = parseFloat(document.getElementById('prostopadloscian-wysokosc').value);

    if (isNaN(dlugosc) || isNaN(szerokosc) || isNaN(wysokosc)) {
        document.getElementById('prostopadloscian-wynik').innerText = "Wprowadź poprawne liczby";
        return;
    }

    const objetosc = dlugosc * szerokosc * wysokosc;
    document.getElementById('prostopadloscian-wynik').innerText = `Objętość: ${objetosc}`;
}

const obliczprostopadloscianpolepow = () => {
    const dlugosc = parseFloat(document.getElementById('prostopadloscian-dlugosc').value);
    const szerokosc = parseFloat(document.getElementById('prostopadloscian-szerokosc').value);
    const wysokosc = parseFloat(document.getElementById('prostopadloscian-wysokosc').value);

    if (isNaN(dlugosc) || isNaN(szerokosc) || isNaN(wysokosc)) {
        document.getElementById('prostopadloscian-wynik').innerText = "Wprowadź poprawne liczby";
        return;
    }

    const polepow = 2 * (dlugosc * szerokosc + dlugosc * wysokosc + szerokosc * wysokosc);
    document.getElementById('prostopadloscian-wynik').innerText = `Pole Powierzchni: ${polepow}`;
}
