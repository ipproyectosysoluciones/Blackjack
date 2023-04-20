import _ from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {Object} tiposCarta
 * @param {Object} tiposEspeciales
 */
export const crearDeck = ( tiposCarta, tiposEspeciales ) => {

  let deck = [];
  
  for( let i = 2; i <= 10; i++ ) {
      for( let tipo of tiposCarta ) {
          deck.push( i + tipo);
      }
  }

  for( let tipo of tiposCarta ) {
      for( let esp of tiposEspeciales ) {
          deck.push( esp + tipo);
      }
  }
  // console.log( deck );
  deck = _.shuffle( deck );

  return deck;
}
