
/**
 * 
 * @param {Array<string>} deck puedes tener la carta 
 * @returns {Array<String>} te devuelve la carta
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }
   
    const carta = deck.pop();
    return carta;
}