const newBoard= ()=>{
  const columns=['a','b','c','d','e','f','g','h'];
  const board={}
  columns.forEach(key=>{
    for (let index = 0; index < 8; index++) {
      const newKey=key+(8-index);
      board[newKey]={
        'piece':null,
        'is_whatched':false
      };
    } 
  });
  board.a1.piece='hola';
  return board;
}
export {newBoard};



