/**
 * 
 * @param {Array<string>} carta aqui te de vuelve el valor de tu carta
 * @returns {number} aqui te devuelve un number
 */

// pedirCarta();
export const valorCarta = ( carta ) => {

    if(!carta) 
    throw new Error('hay que tener una carta del deck')

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
};