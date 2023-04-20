import _ from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param { Array<string> } tiposCarta - Ejemplo: ['C','D','H','S']
 * @param { Array<String> } tiposEspeciales - Ejemplo: ['A','J','Q','K']
 * @returns { Array<String> } Retorna una nuevo deck de cartas.
 */
export const crearDeck = ( tiposCarta, tiposEspeciales ) => {

  if ( !tiposCarta || tiposCarta.length === 0 ) throw new Error( 'TiposCarta es Obligatorio como un arreglo de string' );

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
