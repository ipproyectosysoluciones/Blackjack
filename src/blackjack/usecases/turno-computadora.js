import { pedirCarta, valorCarta, crearCartaHTML } from './';

/**
 * Turno de la computadora
 * @param { Number } puntosMinimos Puntos minimos que la computadora necesita para ganar.
 * @param { HTMLElement } puntosHTML Elemento HTML para mostrar los puntos.
 * @param { HTMLElement } divCartasComputadora Elemento HTML para mostrar las cartas.
 * @param { Array<String> } pedirCarta 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

  if ( !puntosMinimos ) throw new Error( 'Puntos Mínimos son necesarios' );
  if ( !puntosHTML ) throw new Error( 'Argumentos puntosHTML es necesario' );
 
  let puntosComputadora = 0;

  do {
      const carta = pedirCarta( deck );

      puntosComputadora = puntosComputadora + valorCarta( carta );
      puntosHTML.innerText = puntosComputadora;
      
      const imgCarta = crearCartaHTML( carta );
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



