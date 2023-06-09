import _ from 'underscore';

/**
 * Esta Funcion Crea un nuevo Deck
 * @param {Array} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array} TiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array} Esto Retorna un nuevo Deck
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, TiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta === 0) throw new Error('tiposDeCarta es Obligatorio');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
 
    deck = _.shuffle( deck );
    return deck;
};