/**
 * Esta función me permite tomar una carta
 * @param { Array<String> } deck Es un arreglo de string.
 * @returns { String } Retorna la carta del Deck.
 */
export const pedirCarta = ( deck ) => {

  if ( deck.length === 0 ) {
      throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
}