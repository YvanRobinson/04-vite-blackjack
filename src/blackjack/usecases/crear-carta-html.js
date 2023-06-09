
/**
 * 
 * @param {String} carta Es necesaria
 * @returns {HTMLImageElement} devuelve la carta html
 */


export const crearCartaHtml = (carta)=>{

    if(!carta) throw new Error('la carta es necesaria')

    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');


        return imgCarta;

}