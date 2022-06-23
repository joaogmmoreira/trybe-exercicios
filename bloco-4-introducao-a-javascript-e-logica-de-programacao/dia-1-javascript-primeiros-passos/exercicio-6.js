let piece = 'KNIGHT';
let result = piece.toLowerCase();

switch(result){
    case 'knight':
        console.log('L Shape being total 3 spaces');
        break;

    case 'bishop':
        console.log('diagonals as much spaces the player wants');
        break;

    case 'pawn':
        console.log('1 vertical or 2 vertical in his first movement');
        break;

    case 'rook':
        console.log('vertical or horizontal as much spaces the player wants');
        break;
    
    case 'king':
        console.log('anywhere but just 1 space');
        break;

    case 'queen':
        console.log('anywhere any spaces the player wants');
        break;

    default:
        console.log('this piece just exists in your mind');

}
