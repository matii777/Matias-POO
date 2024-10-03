let conteoAcumulado = 0;

function contarCarta() {
    let input = document.getElementById("cartaInput").value.trim().toUpperCase();

    let cartas = input.split('');

    let count = 0;

    cartas.forEach(carta => {
        if (['2','3','4','5','6','7','8','9','10','J','Q','K','A'].includes(carta)) {
            switch (carta) {
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                    conteoAcumulado++;
                    count++;
                    break;
                case '7':
                case '8':
                case '9':
                    break;
                case '10':
                case 'J':
                case 'Q':
                case 'K':
                case 'A':
                    conteoAcumulado--;
                    count--;
                    break;
                default:
                    break;
            }
        }
    });

    let decision = (conteoAcumulado > 0) ? "Bet" : "Hold";

    let resultado = conteoAcumulado + " " + decision;
    document.getElementById("resultado").textContent = resultado;
}

