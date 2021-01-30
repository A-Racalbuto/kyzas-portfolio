let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

// wenn man break bei 4 weglässt zeigt es Exactly und Too big and, weil es dasselbe ist als wären case 4 und case 5 zusammen und beide Nachrichten werden gezeigt, siehe nächstes Beispiel
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

// Ist dasselbe nur anders geschrieben
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
  case 5:
    alert( 'Exactly!' );
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}