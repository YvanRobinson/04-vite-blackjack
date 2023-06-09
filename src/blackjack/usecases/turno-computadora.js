import { crearCartaHtml, pedirCarta, valorCarta } from "./";

/**
 * 
 * @param {number} puntosMinimos puntos Minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elementos HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elementos HTML para mostrar la carta 
 * @param {Array<String>} deck 
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

       if(!puntosMinimos) throw new Error('Los Puntos Minimos son necesarios');
       if(!puntosHTML) throw new Error('Los Argumentos son necesarios');
       let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}